import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { fontsize } from "../../Theme/Font";
import { metrix } from "../../Theme/Contants";
import { RNStyles } from "../../Theme/RNStyles";


const styles = StyleSheet.create({
    viewflex: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    viewWhite: {
        backgroundColor: colors.white,
        padding: metrix.hp_2,
        borderRadius: metrix.hp_1,
        marginHorizontal: metrix.hp_2
    },
    textDelte: {
        color: colors.fontDark,
        fontSize: fontsize[12],
    },
    textAreyou: {
        color: colors.fontLight,
        fontSize: fontsize[12],
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: metrix.hp_3
    },
    touchCancel: {
        height: metrix.hp_6,
        flex: 0.45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: metrix.hp_3,
    },
    textBtn1: {
        color: colors.white,
        fontSize: fontsize[12],
    },
    textBtn2: {
        color: colors.fontDark,
        fontSize: fontsize[12],
    },


})

export { styles }