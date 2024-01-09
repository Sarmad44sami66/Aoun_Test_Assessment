import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import colors from '../../utils/colors'
import Loader from '../../components/Loader'
import Logos from '../../assets/icons'


export default function HomeScreen({ navigation }, route) {

    const userDetails = route?.params?.userDetails || {}
    console.log("userDetails", userDetails);

    const [image, setImage] = useState('')
    const [age, setAge] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [visible, setIsvisible] = useState(false)
    const [loading, setLoading] = useState(false)

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
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: 'black'
                    }}>
                        {'Profile'}
                    </Text>
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
                        // titleAllCaps
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
                        // titleAllCaps
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
                        // titleAllCaps
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
                        // titleAllCaps
                        placeholder={"Age"}
                        value={age}
                        onChangeText={(text) => setAge(text)}
                        keyboardType={'phone-pad'}
                        autoComplete={'tel'}
                        textContentType={'telephoneNumber'}
                    />
                    <CustomInput
                        mainContainer={{
                            width: '100%',
                            height: 45
                        }}
                        title={'Gender'}
                        // titleAllCaps
                        placeholder={"Gender"}
                        value={gender}
                        onChangeText={(text) => setGender(text)}
                        textContentType={'telephoneNumber'}
                    />
                    <View style={{ flex: 1 }} />
                    <CustomButton
                        mainButtonStyle={[styles.loginButtonStyle, {
                            backgroundColor: colors.appBlue
                        }]}
                        btnTextStyle={[styles.loginButtonTextStyle, {
                            color: 'white'
                        }]}
                        label={"Save"}
                        onPress={() => {
                            // showSuccessMsg('Data save Successfully')
                            // navigation.navigate('Dashboard')
                            if (image.uri) addProfilePic(image)
                            else addProfileData()
                        }}
                    />
                </View>
            </ScrollView>

            <Modal visible={visible}
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}
                transparent={true}
                onRequestClose={() => {
                    setIsvisible(!visible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setIsvisible(false)}
                    style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)', alignItems: "flex-end" }}>
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => DeleteAccount()}
                            style={styles.deleteContainer}>
                            <Image
                                source={Logos.hideEye}
                                style={styles.deleteimg}
                            />
                            <Text style={styles.deltxt}>{'Delete Account'}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Loader loading={loading} />
        </SafeAreaView>
    )
}