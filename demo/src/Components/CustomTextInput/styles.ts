import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { metrix } from "../../Theme/Contants";
import { fontsize } from "../../Theme/Font";

export const styles = StyleSheet.create({
    TextInput: {
        width: '100%',
        height: metrix.hp_7,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        color: colors.white,
        backgroundColor: colors.white,
        fontSize: fontsize[12]
    },
    underlineStyle: {
        height: 0
    }

});