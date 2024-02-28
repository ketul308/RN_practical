import { agentObjectType } from "../Screens/AddAgentScreen/type";

const formik = {
    initialValues: {
        company: "",
        person: "",
        mobile: "",
        lanline: "",
        license: "",
        p_email: "",
        s_email: "",
    }
}

function updateFormikValues(v: agentObjectType) {
    formik.initialValues = { ...v };
}

export { formik, updateFormikValues }