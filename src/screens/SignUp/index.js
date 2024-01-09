import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import colors from '../../utils/colors'
import Logos from '../../assets/icons'
import Loader from '../../components/Loader'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [showConPassword, setShowConPassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [showmsg, setShowMsg] = useState(false)
  const [emailMsg, setEmailMsg] = useState('')
  const [showEmailmsg, setShowEmailMsg] = useState(false)



  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeading}>
          {"Create new account"}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.bottomInnerainContainer}>
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45,
            marginTop: 0
          }}
          title={'First Name'}
          // titleAllCaps
          placeholder={"FirstName"}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          autoCapitalize={'words'}
          autoComplete={'name-given'}
          textContentType={'givenName'}
        />
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45,
          }}
          title={'Last Name'}
          // titleAllCaps
          placeholder={"LastName"}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          autoCapitalize={'words'}
          autoComplete={'name-family'}
          textContentType={'familyName'}
        />
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45,
          }}
          title={'Phone Number'}
          // titleAllCaps
          placeholder={"Phone Number"}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType={'phone-pad'}
          autoComplete={'tel'}
          textContentType={'telephoneNumber'}
        />
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 50
          }}
          title={'Email'}
          // titleAllCaps
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoComplete={'email'}
          textContentType={'emailAddress'}
        />
        {showEmailmsg &&
          <Text style={{ fontSize: 10, color: 'red' }}>{emailMsg}</Text>
        }
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45
          }}
          title={'Password'}
          // titleAllCaps
          placeholder={"Password"}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          source={showPassword ? Logos.hideEye : Logos.showEye}
          onPress={() => {
            setShowPassword(!showPassword)
          }}
        />
        {showmsg &&
          <Text style={{ fontSize: 10, color: 'red' }}>{msg}</Text>
        }
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45
          }}
          title={'Confirm Password'}
          // titleAllCaps
          placeholder={"ConfirmPassword"}
          value={confirmPassword}
          secureTextEntry={showConPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          source={showPassword ? Logos.hideEye : Logos.showEye}
          onPress={() => {
            setShowConPassword(!showConPassword)
          }}
        />
        <View style={{ flex: 1 }} />

        <CustomButton
          mainButtonStyle={[styles.signUpButtonStyle, {
            backgroundColor: colors.appBlue
          }]}
          btnTextStyle={[styles.signUpButtonTextStyle, {
            color: colors.white
          }]}
          label={"Submit"}
          onPress={() => signUpWithEmail()}
        />
        <View style={styles.rowContainer}>
          <Text style={styles.newToSkollStyle}>{"Already Rejister? "}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.LoginButtonStyle}>{"Login"}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Loader loading={loading} />
    </SafeAreaView>
  )
}

export default SignUp
