import { Models } from "@rematch/core";
import { count } from "./count";
import { agent } from "./agent";

export interface RootModel extends Models<RootModel> {
    count: typeof count;
    agent: typeof agent;
}

export const models: RootModel = { count, agent };