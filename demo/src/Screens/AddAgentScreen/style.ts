import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { fontsize } from "../../Theme/Font";
import { metrix } from "../../Theme/Contants";

const styles = StyleSheet.create({
    viewMain: {
        flex: 1
    },
    viewMainpad: {
        paddingHorizontal: metrix.hp_2
    },
    textAddAgent: {
        color: colors.fontDark,
        fontSize: fontsize[20],
        marginTop: metrix.hp_6,
    },
    textInputContainer: {
        marginBottom: metrix.hp_2
    },
    textError: {
        color: colors.red,
        fontSize: fontsize[10],
        marginTop: metrix.hp_0_5,
    },
})

export { styles }