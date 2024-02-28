import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { fontsize } from "../../Theme/Font";
import { metrix } from "../../Theme/Contants";
import { RNStyles } from "../../Theme/RNStyles";


const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    textManageAgent: {
        color: colors.fontDark,
        fontSize: fontsize[20],
        marginTop: metrix.hp_6,
        marginLeft: metrix.hp_2
    },
    viewMid: {
        flex: 0.87,
        // backgroundColor: 'red'
    },
    viewBottom: {
        flex: 0.13,
        backgroundColor: '#ccc'
    },
    viewAgentData: {
        ...RNStyles.shadowStyle,
        backgroundColor: colors.white,
        borderRadius: metrix.hp_1,
        marginHorizontal: metrix.hp_2,
        paddingVertical: metrix.hp_2,
        paddingHorizontal: metrix.hp_2,
        marginTop: metrix.hp_5,
    },
    textEdit: {
        color: colors.fontDark,
        fontSize: fontsize[12],
        marginLeft: metrix.hp_2,
        textDecorationLine: "underline"
    },
    textGray: {
        color: colors.fontLight,
        fontSize: fontsize[12],
        marginLeft: metrix.hp_2,
        textDecorationLine: "underline"
    },
    viewLine: {
        height: 1,
        backgroundColor: colors.fontLight,
        marginVertical: metrix.hp_1
    },
})

export { styles }