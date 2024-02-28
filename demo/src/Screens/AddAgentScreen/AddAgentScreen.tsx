import { View, Text, Alert, } from 'react-native'
import React, { useEffect, } from 'react'
import KeyboardScroll from '../../Components/KeyboardScroll/KeyboardScroll'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { message } from '../../Constants/text'
import CustomHeader from '../../Components/CustomHeader/CustomHeader'
import { styles } from './style'
import { Props, agentObjectType } from './type'
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput'
import { metrix } from '../../Theme/Contants'
import { Formik } from 'formik'
import { formik, updateFormikValues } from '../../Constants/formikInitial'
import * as Yup from 'yup';
import { RegEx } from '../../Constants/Regex'
import { dispatch } from '../../rematch/store/store'
import { useSelector } from 'react-redux'


const AddAgentScreen: React.FC<Props> = (props: Props) => {
    const { navigation } = props;
    const AgentData: agentObjectType = useSelector((e: any) => e.agent.AgentData);

    function handleSubmit(value: agentObjectType) {
        if (value.p_email !== value.s_email) {
            dispatch.agent.setAgent(value);
            navigation.goBack();
        } else {
            Alert.alert("Alert", message.primary_secondary_email)
        }
    }

    useEffect(() => {
        if (AgentData.company) {
            updateFormikValues(AgentData);
        } else {
            updateFormikValues();
        }
    }, [AgentData])

    return (
        <Formik
            initialValues={formik.initialValues}
            onSubmit={values => handleSubmit(values)}
            validationSchema={Yup.object().shape({
                company: Yup.string().required(message.required_email),
                person: Yup.string().required(message.required_person),
                mobile: Yup.string().matches(RegEx.mobile, message.warn_mobile).required(message.required_mobile),
                lanline: Yup.string().matches(RegEx.lanline, message.warn_lanline).required(message.required_lanline),
                license: Yup.string().matches(RegEx.license, message.warn_lincense).required(message.required_licence),
                p_email: Yup.string().matches(RegEx.email, message.warn_email).required(message.required_email),
                s_email: Yup.string().matches(RegEx.email, message.warn_email).required(message.required_email),
            })}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {

                return (
                    <KeyboardScroll
                        bottomStaticComponent={
                            <CustomButton
                                disabled={Object.keys(errors).length > 0}
                                onPress={handleSubmit}
                                label={message.Submit}
                            />
                        }
                    >
                        <CustomHeader
                            onPressLeftIcon={() => navigation.goBack()}
                            leftIcon={<Text style={styles.textCancel}>{message.cancel}</Text>}
                        />
                        <View style={styles.viewMainpad}>
                            <Text style={styles.textAddAgent}>{message.addAgent}</Text>
                            <View>
                                <View style={[styles.textInputContainer, { marginTop: metrix.hp_4 }]}>
                                    <CustomTextInput
                                        placeholder={message.nameCompany}
                                        onChangeText={handleChange("company")}
                                        onBlur={handleBlur("company")}
                                        value={values.company}
                                    />
                                    {
                                        touched.company && errors.company &&
                                        <Text style={styles.textError}>{errors.company}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.namePerson}
                                        onChangeText={handleChange("person")}
                                        onBlur={handleBlur("person")}
                                        value={values.person}
                                    />
                                    {
                                        touched.person && errors.person &&
                                        <Text style={styles.textError}>{errors.person}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.mobileNo}
                                        onChangeText={handleChange("mobile")}
                                        onBlur={handleBlur("mobile")}
                                        value={values.mobile}
                                    />
                                    {
                                        touched.mobile && errors.mobile &&
                                        <Text style={styles.textError}>{errors.mobile}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.lanlineNo}
                                        onChangeText={handleChange("lanline")}
                                        onBlur={handleBlur("lanline")}
                                        value={values.lanline}
                                    />
                                    {
                                        touched.lanline && errors.lanline &&
                                        <Text style={styles.textError}>{errors.lanline}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.licenceNo}
                                        onChangeText={handleChange("license")}
                                        onBlur={handleBlur("license")}
                                        value={values.license}
                                    />
                                    {
                                        touched.license && errors.license &&
                                        <Text style={styles.textError}>{errors.license}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.primaryEmail}
                                        onChangeText={handleChange("p_email")}
                                        onBlur={handleBlur("p_email")}
                                        value={values.p_email}
                                    />
                                    {
                                        touched.p_email && errors.p_email &&
                                        <Text style={styles.textError}>{errors.p_email}</Text>
                                    }
                                </View>
                                <View style={styles.textInputContainer}>
                                    <CustomTextInput
                                        placeholder={message.SecondaryEmail}
                                        onChangeText={handleChange("s_email")}
                                        onBlur={handleBlur("s_email")}
                                        value={values.s_email}
                                    />
                                    {
                                        touched.s_email && errors.s_email &&
                                        <Text style={styles.textError}>{errors.s_email}</Text>
                                    }
                                </View>
                            </View>
                        </View>
                    </KeyboardScroll>
                )
            }}
        </Formik>
    )
}

export default AddAgentScreen