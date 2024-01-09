import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, TextInputProps } from 'react-native'
import colors from '../utils/colors';

const CustomInput = (props: TextInputProps) => {
    return (
        <View style={[styles.main, props.main]}>
            {props?.title &&
                <Text style={styles.title}>{props.titleAllCaps ? props.title?.toUpperCase() : props.title}</Text>
            }
            <View
                style={[styles.mainContainer, props.mainContainer]}
            >
                {props.leftIcon && <TouchableOpacity
                    style={[styles.imageContainer, props.leftIconStyle]}
                    onPress={props.onLeftIconPress}

                >
                    <Image
                        style={styles.passwordIcon}
                        source={props.leftIcon}
                    />
                </TouchableOpacity>}
                <TextInput
                    placeholderTextColor={colors.gray}
                    style={[styles.inputContainer, props.inputMainStyle]}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    secureTextEntry={props.secureTextEntry}
                    maxLength={props.maxLength}
                    editable={props.editable}
                    onBlur={props.onBlur}
                    multiline={props.multiline}
                    keyboardType={props.keyboardType}
                    defaultValue={props.defaultValue}
                    autoCapitalize='none'
                    {...props}
                />
                {props.source && <TouchableOpacity style={styles.imageContainer}
                    onPress={props.onPress}
                    disabled={props.disableLeftIcon}
                >
                    <Image
                        resizeMode='contain'
                        style={[styles.passwordIcon, props.arrowIcon]}
                        source={props.source}
                    />
                </TouchableOpacity>}
            </View>
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        marginTop: 20,
    },
    mainContainer: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor:colors.gray,
    },
    title: {
        color: colors.gray,
        fontSize: 15,
        fontWeight: "400",
        paddingVertical: 2
    },
    inputContainer: {
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft: 10,
        borderRadius: 25,
        color: colors.blackColor,
    },
    imageContainer: {
        width: '20%',
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        borderRadius: 25
    },
    passwordIcon: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        tintColor:colors.gray,
        marginLeft: 10,
    }
})
