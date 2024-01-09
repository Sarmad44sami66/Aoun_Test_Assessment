import React from 'react';
import {
  StyleSheet,
  View,
  LogBox
} from 'react-native';
import Routes from './src/navigation/Routes';

LogBox.ignoreAllLogs()

function App(): JSX.Element {
  return (
    <View style={styles.mainContainer}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;
