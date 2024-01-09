import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';
import colors from '../utils/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  mainButtonStyle?: object;
  btnTextStyle?: object;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, props.mainButtonStyle]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={[styles.buttonTextStyle, props.btnTextStyle]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    height: 45,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: colors.white,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
