import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { agentObjectType } from "../../Screens/AddAgentScreen/type";

export const agent = createModel<RootModel>()({
    state: {
        AgentData: {} as agentObjectType
    },
    reducers: {
        setAgent(state, payload) {
            return {
                ...state,
                AgentData: payload
            }
        },
    }
});