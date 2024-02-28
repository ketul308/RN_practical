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

function updateFormikValues(v?: agentObjectType) {
    if (v) {
        formik.initialValues = { ...v };
    } else {
        formik.initialValues = {
            company: "",
            person: "",
            mobile: "",
            lanline: "",
            license: "",
            p_email: "",
            s_email: "",
        }
    }
}

export { formik, updateFormikValues }