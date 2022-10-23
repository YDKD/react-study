import { TActionType } from "../types";
import { CHANGE_AGE, CHANGE_NAME } from "./constants";

export const changeNameAction = (name: string) => ({
    type: CHANGE_NAME as TActionType,
    name
})

export const changeAgeAction = (age: number) => ({
    type: CHANGE_AGE as TActionType,
    age
})
