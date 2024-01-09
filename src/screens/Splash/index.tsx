import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Logos from '../../assets/icons'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('AfterSplash')
        }, 2000);
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Image
                source={Logos.AppLogo}
                style={styles.img}
            />
        </View>
    )
}

export default Splash