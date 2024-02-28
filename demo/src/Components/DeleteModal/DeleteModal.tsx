import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { message } from '../../Constants/text'
import { colors } from '../../Theme/Colors'

type Props = {
    visible: boolean
    onCloseModal?: (type: string) => void
}

const DeleteModal = (props: Props) => {

    const { visible, onCloseModal } = props;
    return (
        <Modal
            visible={visible}
            animationType={"slide"}
            transparent
            statusBarTranslucent
        >
            <View style={styles.viewflex}>
                <View style={styles.viewWhite}>
                    <Text style={styles.textDelte}>
                        {message.deleteManging}
                    </Text>
                    <Text style={styles.textAreyou}>
                        {message.areyousure}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => onCloseModal?.("close")}
                            style={[styles.touchCancel, {
                                backgroundColor: colors.buttonColor
                            }]}>
                            <Text style={styles.textBtn1}>{message.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onCloseModal?.("delete")}
                            style={[styles.touchCancel, {
                                backgroundColor: colors.syan
                            }]}>
                            <Text style={styles.textBtn2}>{message.delete}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeleteModal