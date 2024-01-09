import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, Image } from 'react-native';
import CustomButton from './CustomButton';
import colors from '../utils/colors';
import Logos from '../assets/icons';

interface PopUpProps {
    isvisible: boolean;
    onClose: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({ isvisible, onClose }) => {
    return (
        <View style={styles.container}>
            <Modal
                visible={isvisible}
                transparent
                animationType="slide"
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={Logos.Welcome}
                            style={{ width: 200, height: 250, marginTop: "30%" }}
                        />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '700',
                            color: 'white',
                            marginTop: 40,
                        }}>{'Welcome!'}</Text>
                        <CustomButton
                            mainButtonStyle={[styles.loginButtonStyle, {
                                backgroundColor: colors.appBlue
                            }]}
                            btnTextStyle={[styles.loginButtonTextStyle, {
                                color: 'white'
                            }]}
                            onPress={onClose}
                            label={"Done"}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
        height: '80%'
    },
    closeButton: {
        marginTop: 10,
        color: 'blue',
    },
    loginButtonStyle: {
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 0.5,
        margin: 20,
        width: '100%',
        position: 'absolute',
        bottom: 20
    },
    loginButtonTextStyle: {
        color: colors.blue,
    },
});
