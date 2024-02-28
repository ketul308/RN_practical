import { Models } from "@rematch/core";
import { agent } from "./agent";

export interface RootModel extends Models<RootModel> {
    agent: typeof agent;
}

export const models: RootModel = { agent };