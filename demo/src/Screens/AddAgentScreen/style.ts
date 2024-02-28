import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { fontFamily, fontsize } from "../../Theme/Font";
import { metrix } from "../../Theme/Contants";

const styles = StyleSheet.create({
    viewMain: {
        flex: 1
    },
    viewMainpad: {
        paddingHorizontal: metrix.hp_2
    },
    textCancel: {
        color: colors.fontDark,
        fontFamily: fontFamily.Quicksand_SemiBold,
        fontSize: fontsize[12],
    },
    textAddAgent: {
        color: colors.fontDark,
        fontFamily: fontFamily.Quicksand_Bold,
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