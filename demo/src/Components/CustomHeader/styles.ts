import { StyleSheet } from "react-native";
import { metrix } from "../../Theme/Contants";
import { colors } from "../../Theme/Colors";
import { fontsize } from "../../Theme/Font";


export const styles = StyleSheet.create({
    touchLeft: {
        position: "absolute",
        zIndex: 1,
        left: metrix.hp_2,
    },
    touchRight: {
        position: "absolute",
        zIndex: 1,
        right: metrix.hp_2,
    },

});