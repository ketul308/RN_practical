import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Props } from './type'
import { RNStyles } from '../../Theme/RNStyles';
import { styles } from './styles';
import { metrix } from '../../Theme/Contants';


const CustomHeader = (props: Props) => {
    const { leftIcon, rightIcon, onPressLeftIcon, onPressRightIcon } = props;
    return (
        <View style={[RNStyles.flexRow, { marginTop: metrix.hp_1 }]}>
            {
                leftIcon &&
                <TouchableOpacity onPress={onPressLeftIcon} style={styles.touchLeft}>
                    {leftIcon}
                </TouchableOpacity>
            }
            {
                rightIcon &&
                <TouchableOpacity onPress={onPressRightIcon} style={styles.touchRight}>
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

export default CustomHeader