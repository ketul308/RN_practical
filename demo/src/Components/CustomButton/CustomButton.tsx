import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Props } from './type';
import { colors } from '../../Theme/Colors';


const CustomButton = (props: Props) => {
    const { label, onPress, disabled } = props;
    return (
        <View style={styles.viewButtonContainer}>
            <TouchableOpacity disabled={disabled} style={[styles.touchButton, { backgroundColor: disabled ? colors.buttonDisableColor : colors.buttonColor }]} onPress={onPress}>
                <Text style={styles.textLabel}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton