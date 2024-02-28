import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, View, } from 'react-native'
import { styles } from './styles';
import { TextInput } from 'react-native-paper';

type Props = {
    onChangeText?: ((text: string) => void)
    value?: string
    placeholder?: string
    onPressRightIcon?: () => void
    onPressLeftIcon?: () => void
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
}

const CustomTextInput = (props: Props) => {

    const {
        onChangeText,
        placeholder,
        onBlur,
        value
    } = props;

    return (
        <View >
            <TextInput
                value={value}
                style={styles.TextInput}
                mode={"flat"}
                label={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                underlineStyle={styles.underlineStyle}
            />
        </View>
    )
}

export default CustomTextInput;