import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { Props } from './type'
import { message } from '../../Constants/text'
import { styles } from './style'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { All_Screen } from '../../Navigation/type'
import { useSelector } from 'react-redux'
import { RNStyles } from '../../Theme/RNStyles'
import { agentObjectType } from '../AddAgentScreen/type'
import { colors } from '../../Theme/Colors'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import { dispatch } from '../../rematch/store/store'

const ManageAgentScreen: React.FC<Props> = (props: Props) => {
    const { navigation } = props;
    const [isAgentData, setIsAgentData] = useState(false);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const AgentData: agentObjectType = useSelector((e: any) => e.agent.AgentData);
    useEffect(() => {
        console.log('ManageAgentScreen', AgentData);
        if (AgentData.company) {
            setIsAgentData(true)
        } else {
            setIsAgentData(false)
        }
    }, [AgentData])

    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader
                onPressLeftIcon={() => navigation.goBack()}
            // leftIcon={<Text>{message.cancel}</Text>}
            />
            <Text style={styles.textManageAgent}>{message.managedByagent}</Text>
            <View style={styles.viewMid}>
                {
                    Object.keys(AgentData).length > 0 &&
                    <View style={styles.viewAgentData}>
                        <View style={RNStyles.flexRow}>
                            <Image

                            />
                            <View style={styles.safeArea}>
                                <Text style={styles.textEdit}>{AgentData.company}</Text>
                                <Text style={styles.textGray}>{AgentData.person}</Text>
                                <Text style={styles.textGray}>{AgentData.mobile}</Text>
                            </View>
                            <Text onPress={() => navigation.navigate(All_Screen.AddAgentScreen)} style={styles.textEdit}>{message.edit}</Text>
                        </View>
                        <View style={styles.viewLine} />
                        <Text
                            onPress={() => setshowDeleteModal(true)}
                            style={[styles.textEdit, { color: colors.red, textAlign: "center" }]}
                        >
                            {message.delete}
                        </Text>
                    </View>
                }
            </View>
            {
                !isAgentData &&
                <View style={styles.viewBottom}>
                    <CustomButton
                        onPress={() => navigation.navigate(All_Screen.AddAgentScreen)}
                        label={message.addAgent}
                    />
                </View>
            }
            <DeleteModal
                visible={showDeleteModal}
                onCloseModal={(t) => {
                    if (t === 'close') {
                        setshowDeleteModal(false);
                    } else {
                        setshowDeleteModal(false);
                        dispatch.agent.setAgent({});
                    }
                }}
            />
        </SafeAreaView>
    )
}

export default ManageAgentScreen