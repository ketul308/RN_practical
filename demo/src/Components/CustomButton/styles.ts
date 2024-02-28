import { StyleSheet } from "react-native";
import { metrix } from "../../Theme/Contants";
import { colors } from "../../Theme/Colors";
import { fontsize } from "../../Theme/Font";


export const styles = StyleSheet.create({
    touchButton: {
        height: metrix.hp_6,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: metrix.hp_3,
        backgroundColor: colors.buttonColor
    },
    textLabel: {
        color: colors.white,
        fontSize: fontsize[12],
        // fontWeight: "600"
    },
    viewButtonContainer: {
        paddingHorizontal: metrix.hp_2,
        paddingBottom: metrix.hp_3,
        paddingTop: metrix.hp_2,
        backgroundColor: "#ccc",
        borderColor: colors.buttonDisableColor,
        borderTopWidth: 1
    }

});