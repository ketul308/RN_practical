import { StyleSheet } from "react-native";
import { colors } from "../../Theme/Colors";
import { fontFamily, fontsize } from "../../Theme/Font";
import { hp, metrix } from "../../Theme/Contants";
import { RNStyles } from "../../Theme/RNStyles";


const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    textManageAgent: {
        color: colors.fontDark,
        fontSize: fontsize[20],
        marginTop: metrix.hp_6,
        marginLeft: metrix.hp_2,
        fontFamily: fontFamily.Quicksand_Bold
    },
    viewMid: {
        flex: 1,
    },
    viewBottom: {
        justifyContent: "center"
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
        fontSize: fontsize[13],
        fontFamily: fontFamily.Quicksand_Bold,
        marginLeft: metrix.hp_2,
        textDecorationLine: "underline"
    },
    textcompany: {
        color: colors.fontDark,
        fontSize: fontsize[20],
        lineHeight: fontsize[20],
        fontFamily: fontFamily.Quicksand_Bold,
        marginLeft: metrix.hp_1,
    },
    textGray: {
        color: colors.fontLight,
        fontFamily: fontFamily.Quicksand_SemiBold,
        fontSize: fontsize[13],
        lineHeight: fontsize[16],
        marginLeft: metrix.hp_1,
    },
    viewLine: {
        height: 1,
        backgroundColor: colors.fontLight,
        marginVertical: metrix.hp_1
    },
    iconUser: {
        height: metrix.hp_3,
        width: metrix.hp_3,
    },
    imagePlus: {
        height: hp(40),
        width: hp(40),
        alignSelf: "center",

    }
})

export { styles }