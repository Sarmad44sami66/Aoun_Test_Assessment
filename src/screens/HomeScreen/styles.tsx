import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    profileImageContainer: {
        alignSelf: 'center',
        width: 100,
        height: 80,
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 25
    },
    cameraIconContainer: {
        width: 35,
        height: 35,
        position: 'absolute',
        left: 63,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        bottom: 0,
        borderColor: "rgba(10, 10, 10,0.5)",
        backgroundColor: "rgba(10, 10, 10,0.3)",
    },
    cameraIconImage: {
        alignSelf: 'center',
        width: 20,
        height: 20,
        tintColor: colors.white
    },
    modalContainerStyle: {
        height: 240,
    },
    modalLabelStyle: {
        color: colors.gray
    },
    cameraButton: {
        backgroundColor: colors.appBlue,
        borderColor: colors.greenColor
    },
    cameraButtonText: {
        color: colors.white
    },
    loginButtonStyle: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 0.5,
        margin: 20,
        width: '100%',
    },
    loginButtonTextStyle: {
        color: colors.blue,
    },
    container: {
        backgroundColor: colors.white,
        height: 100,
        width: '40%',
        alignItems: 'center',
        position: "absolute",
        top: 40,
        right: 20,
        borderRadius: 20,
    },
    deleteContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    deleteimg: {
        width: 18,
        height: 18,
    },
    deltxt: {
        color: colors.blackColor,
        fontSize: 14
    },
    imageContainer: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    }

})

export default styles;