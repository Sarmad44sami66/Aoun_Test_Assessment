import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import colors from '../../utils/colors'
import Loader from '../../components/Loader'
import Logos from '../../assets/icons'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import GenderSelection from '../../components/GenderSelection'
import { PopUp } from '../../components/PopUp'


interface HomeScreenProps {
  navigation: any; // Adjust the type of navigation as per your requirement
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const isFocused = useIsFocused()

  const [email, setEmail] = useState('');
  const [image, setImage] = useState('')
  const [age, setAge] = useState<string | boolean>(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [gender, setGender] = useState('');
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getUserDetails()
    setShowModal(true)
  }, [isFocused]);

  const getUserDetails = async () => {
    const userId: any = await AsyncStorage.getItem('USERID');
    firestore()
      .collection('users')
      .doc(userId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const userData = documentSnapshot.data();
          setEmail(userData?.email)
          setFirstName(userData?.givenName)
          setLastName(userData?.familyName)
          setImage(userData?.photo)
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }

  const updateUserDataInFirestore = async () => {
    const userId: any = await AsyncStorage.getItem('USERID');
    setLoading(true)
    try {
      const updatedData = {
        givenName: firstName,
        familyName: lastName,
        email: email,
        phone: phone,
        age: age,
        gender: gender
      };
      await firestore().collection('users').doc(userId).update(updatedData);
    } catch (error) {
      console.error('Error updating user data:', error);
    } finally {
      setLoading(false)
    }
  };

  const deleteAccount = async () => {
    const currentUser = auth().currentUser
    if (!currentUser) {
      console.error('User not authenticated');
      return;
    }
    const userId: any = await AsyncStorage.getItem('USERID');
    setLoading(true)
    try {
      await firestore().collection('users').doc(userId).delete();
      await currentUser.delete();
      navigation.replace('Login')
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      setLoading(false)
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteAccount(),
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1, width: '95%', alignSelf: 'center' }}>
        <View style={{
          width: '90%',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: 30,
          flexDirection: 'row',
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'black',
            width: '95%',
            textAlign: 'center'
          }}>
            {'Profile'}
          </Text>
          <TouchableOpacity onPress={() => confirmDelete()}>
            <Image style={{ width: 30, height: 30, }} source={Logos.Bin} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image style={{ width: 100, height: 100, borderRadius: 100 }}
            source={{ uri: image }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <CustomInput
            mainContainer={{
              width: '100%',
              height: 45
            }}
            title={'First Name'}
            // titleAllCaps
            placeholder={"First Name"}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            autoCapitalize={'words'}
            autoComplete={'name-given'}
            textContentType={'givenName'}
          />
          <CustomInput
            mainContainer={{
              width: '100%',
              height: 45
            }}
            title={'Last Name'}
            placeholder={"Last Name"}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            autoCapitalize={'words'}
            autoComplete={'name-family'}
            textContentType={'familyName'}
          />
          <CustomInput
            mainContainer={{
              width: '100%',
              height: 45
            }}
            title={'Email'}
            placeholder={"Email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize={'words'}
            autoComplete={'name-family'}
            textContentType={'familyName'}
          />
          <CustomInput
            mainContainer={{
              width: '100%',
              height: 45
            }}
            title={'Phone Number'}
            placeholder={"phone Number"}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType={'phone-pad'}
            autoComplete={'tel'}
            textContentType={'telephoneNumber'}
          />
          <CustomInput
            mainContainer={{
              width: '100%',
              height: 45
            }}
            title={'Age'}
            placeholder={"Age"}
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType={'phone-pad'}
            autoComplete={'tel'}
            textContentType={'telephoneNumber'}
          />
          <GenderSelection gender={gender} setGender={setGender} />
          <View style={{ flex: 1 }} />
          <CustomButton
            mainButtonStyle={[styles.loginButtonStyle, {
              backgroundColor: colors.appBlue
            }]}
            btnTextStyle={[styles.loginButtonTextStyle, {
              color: 'white'
            }]}
            onPress={() => updateUserDataInFirestore()}
            label={"Update"}
          />
        </View>
      </ScrollView>
      <Loader loading={loading} />
      <PopUp
        isvisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  )
}

export default HomeScreen;