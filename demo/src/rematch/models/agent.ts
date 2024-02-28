import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const agent = createModel<RootModel>()({
    state: {
        AgentData: {}
    },
    reducers: {
        setAgent(state, payload: any) {
            console.log('====================================');
            console.log(state, payload);
            console.log('====================================');
            return {
                ...state,
                AgentData: payload
            }
        },
    }
});