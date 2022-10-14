import React, { createContext } from "react";
import { IUserInfo } from "../types";

const UserContext = React.createContext<IUserInfo>({ name: 'default', age: 24 });

export default UserContext;
