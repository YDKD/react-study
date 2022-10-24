import { CHANGE_HOME_TITLE } from "./constants";

export const changeHomeTitleAction = (title: string) => ({
    type: CHANGE_HOME_TITLE,
    title
})
