import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '95%',
        alignSelf: 'center'
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
        width: '100%',
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    mainHeading: {
        color: colors.blackColor,
        margin: 5,
        textAlign: 'center',
        fontSize: 28
    },
    loginButtonStyle: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 0.5,
        margin: 20,
        width: '100%'
    },
    loginButtonTextStyle: {
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
    signUpButtonStyle: {
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
        bottom: 20,
        position: 'absolute'
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
        marginHorizontal: 10
    },
    logoStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    mainHeader: {
        height: '10%',
        justifyContent: 'flex-start',
        marginTop: "30%"
    },
    imgview: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.redColor,
        alignSelf: 'center',
        alignItems: 'center'
    },
    bottomHeadingContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    lineView: {
        width: 80,
        height: 2,
        marginTop: 5,
        backgroundColor: colors.lightGray
    },
    orSignInText: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.gray,
        marginHorizontal: 10
    },
    socialLoginContainer: {
        width: '40%',
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialimg: {
        width: 25,
        height: 25,
    },
    socialBtn: {
        backgroundColor: colors.appBlue,
        padding: 5,
        borderRadius: 6,
        marginTop: 30
    }
})

export default styles;