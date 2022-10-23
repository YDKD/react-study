import store from ".";
import { CHANGE_NAME } from "./constants";

export const changeName = (name: string) => {
    store.dispatch({
        type: CHANGE_NAME,
        name
    })
}
