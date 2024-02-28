import { Platform, StyleSheet } from "react-native";
import { hp, metrix } from "../../Theme/Contants";
import { colors } from "../../Theme/Colors";

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.screenBG,
        flex: 1
    },
    keyboardView: {
        height: Platform.OS === "android" ? hp(100)
            : undefined
    },
    scrollView: {
        height: Platform.OS === "ios" ? hp(85) : hp(95)
    }
})

export { styles }