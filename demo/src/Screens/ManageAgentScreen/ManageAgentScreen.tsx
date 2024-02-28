import { View, Text, Image, Alert, BackHandler } from 'react-native'
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
import { colors } from '../../Theme/Colors'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import { dispatch } from '../../rematch/store/store'
import { All_Images } from '../../Icons/Images'
import { agentObjectType } from '../AddAgentScreen/type'

const ManageAgentScreen: React.FC<Props> = (props: Props) => {
    const { navigation } = props;
    const [isAgentData, setIsAgentData] = useState(false);
    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const AgentData: agentObjectType = useSelector((e: any) => e.agent.AgentData);

    useEffect(() => {
        if (AgentData.company) {
            setIsAgentData(true)
        } else {
            setIsAgentData(false)
        }
    }, [AgentData])

    function showAlert() {
        Alert.alert("Alert", message.exit, [{
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')
        },
        {
            text: 'OK', onPress: async () => BackHandler.exitApp()
        }],
            {
                cancelable: false
            })
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomHeader
                onPressRightIcon={() => showAlert()}
                rightIcon={<Image source={All_Images.close} style={styles.iconUser} />}
            />
            <Text style={styles.textManageAgent}>{message.managedByagent}</Text>
            <View style={[styles.viewMid, { justifyContent: isAgentData ? "flex-start" : "center" }]}>
                {
                    isAgentData ?
                        <View style={styles.viewAgentData}>
                            <View style={RNStyles.flexRow}>
                                <Image
                                    source={All_Images.person}
                                    style={styles.iconUser}
                                />
                                <View style={styles.safeArea}>
                                    <Text style={styles.textcompany}>{AgentData.company}</Text>
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
                        :
                        <View>
                            <Image
                                source={All_Images.manStandUp}
                                resizeMode={"contain"}
                                style={styles.imagePlus}
                            />
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