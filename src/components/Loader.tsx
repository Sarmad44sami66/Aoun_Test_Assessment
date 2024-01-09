import React from 'react';
import { StyleSheet, View, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import colors from '../utils/colors';

interface LoaderProps {
  loading: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  color?: string;
  size?: 'small' | 'large' | number;
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { loading, style, containerStyle, color, size } = props;

  if (loading) {
    return (
      <View style={[styles.container, containerStyle]}>
        {loading && (
          <ActivityIndicator
            animating={loading}
            size={size ? size : 'large'}
            color={color ? color : colors.appBlue}
            style={[{ marginLeft: 5 }, style ? style : {}]}
          />
        )}
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loader;
