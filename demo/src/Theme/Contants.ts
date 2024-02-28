import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";


function hp(n: number) {
    return Number(heightPercentageToDP(n).toFixed(2));
}

function wp(n: number) {
    return Number(widthPercentageToDP(n).toFixed(2));
}

const metrix = {
    hp_0_5: hp(0.5),
    hp_1: hp(1),
    hp_1_5: hp(1.5),
    hp_2: hp(2),
    hp_2_5: hp(2.5),
    hp_3: hp(3),
    hp_3_5: hp(3.5),
    hp_4: hp(4),
    hp_4_5: hp(4.5),
    hp_5: hp(5),
    hp_5_5: hp(5.5),
    hp_6: hp(6),
    hp_6_5: hp(6.5),
    hp_7: hp(7),


    wp_100: wp(100),
}

export { metrix, hp, wp }