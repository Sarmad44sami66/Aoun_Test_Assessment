import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';
import Logos from '../../assets/icons';
import Loader from '../../components/Loader';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface LoginProps {
  navigation: any;
}

interface UserData {
  id: string;
  givenName: string;
  familyName: string;
  email: string;
  photo: string;
  uid: string;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '464544762550-put23quu3o3l5t14d90p6ac3rgj36a39.apps.googleusercontent.com',
    });
  }, []);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const signIn = async () => {
    setLoading(true)
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo: any = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(usrInfo?.idToken);
      await auth().signInWithCredential(googleCredential);
      storeUserDataInFirestore(usrInfo?.user)
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log('Error --->>>', error);
      }
    }
    finally {
      setLoading(false)
    }
  };

  const storeUserDataInFirestore = async (userData: UserData) => {
    if (userData) {
      try {
        const userFirestoreData = {
          id: userData.id,
          givenName: userData.givenName,
          familyName: userData.familyName,
          email: userData.email,
          photo: userData.photo,
        };
        await firestore().collection('users').doc(userData.id).set(userFirestoreData);
        await AsyncStorage.setItem('USERID', userData.id)
        navigation.replace('HomeScreen');
      } catch (error) {
        console.error('Error storing user data:', error);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bottomInnerainContainer}>
        <View style={styles.bottomHeadingContainer}>
          <View style={styles.lineView}></View>
          <Text style={styles.orSignInText}>{'Login With'}</Text>
          <View style={styles.lineView}></View>
        </View>
        <TouchableOpacity onPress={() => signIn()} style={styles.socialBtn}>
          <Image source={Logos.googleLogo} style={styles.socialimg} />
        </TouchableOpacity>
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default Login;
