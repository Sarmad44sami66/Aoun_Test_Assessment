import { StyleSheet } from 'react-native';

import colors from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    imageBackGround: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowContainer: {
        // flex:1,
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(10, 10, 10,0.5)",
    },
    headingContainer: {
        width: '100%',
        height: '35%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    headerStyle: {
        marginTop: 50
    },
    bottomContainer: {
        width: '100%',
        height: '70%',
        marginTop: 'auto',
        backgroundColor: colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    bottomInnerainContainer: {
        width: '95%',
        alignSelf: 'center',
    },
    mainHeading: {
        color: colors.blackColor,
        margin: 5,
        textAlign: 'center',
        fontSize: 28
    },
    signUpButtonStyle: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 0.5,
        margin: 20,
        width: '100%'
    },
    signUpButtonTextStyle: {
        color: colors.blue,
    },
    forgotPasswordStyle: {
        marginTop: 20,
        fontSize: 15,
        color: colors.gray
    },
    newToSkollStyle: {
        fontSize: 15,
        color: colors.gray
    },
    socialButtonContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orTextStyle: {
        margin: 10,
        fontSize: 15,
        color: colors.gray
    },
    facebookButtonStyle: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: colors.blue,
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,

    },
    logoStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    mainHeader: {
        height: '13%',
        justifyContent: 'flex-start'
    },
    imgview: {
        height: '20%',
        justifyContent: 'center'
    },
    newToSkollStyle: {
        fontSize: 15,
        color: colors.gray
    },
    LoginButtonStyle: {
        fontSize: 15,
        color: colors.blue,
        textDecorationLine: 'underline'
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
})

export default styles;