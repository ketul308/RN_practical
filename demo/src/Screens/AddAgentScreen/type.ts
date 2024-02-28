import { NavigationProp } from "@react-navigation/native"
import { MainStack } from "../../Navigation/type"

export type Props = {
    navigation: NavigationProp<MainStack>
}

export type agentObjectType = {
    company: string,
    lanline: string,
    license: string,
    mobile: string,
    p_email: string,
    person: string,
    s_email: string
}