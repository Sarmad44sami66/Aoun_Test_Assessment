import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import CustomButton from '../../components/CustomButton'
import Logos from '../../assets/icons'
import CustomInput from '../../components/CustomInput'
import Loader from '../../components/Loader'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const Login = ({ navigation }) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '464544762550-put23quu3o3l5t14d90p6ac3rgj36a39.apps.googleusercontent.com',
    });
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // await GoogleSignin.signOut();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo)
      navigation.replace('HomeScreen', {
        userDetails: usrInfo
      })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log("Error --->>>", error);
      }
    }
  };



  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeading}>
          {"Login to continue"}
        </Text>
      </View>
      <View style={styles.bottomInnerainContainer}>
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45
          }}
          title={'Email'}
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          autoComplete={'email'}
          textContentType={'emailAddress'}
        />
        <CustomInput
          mainContainer={{
            width: '100%',
            height: 45
          }}
          placeholder={"Password"}
          title={'Password'}
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)
          }
          source={showPassword ? Logos.hideEye : Logos.showEye}
          onPress={() => {
            setShowPassword(!showPassword)
          }}
        />
        <CustomButton
          mainButtonStyle={[styles.loginButtonStyle, {
            backgroundColor: 'blue'
          }]}
          btnTextStyle={[styles.loginButtonTextStyle, {
            color: 'white'
          }]}
          label={"LOGIN"}
          onPress={() => signInWithEmail()}
        />
        <View style={styles.bottomHeadingContainer}>
          <View style={styles.lineView}></View>
          <Text style={styles.orSignInText}>{'or Login With'}</Text>
          <View style={styles.lineView}></View>
        </View>
        <TouchableOpacity onPress={() => signIn()}
          style={styles.socialBtn}>
          <Image
            source={Logos.googleLogo}
            style={styles.socialimg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.newToSkollStyle}>{"New to App? "}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpButtonStyle}>{"Sign Up"}</Text>
        </TouchableOpacity>
      </View>
      <Loader loading={loading} />
    </View >
  )
}

export default Login