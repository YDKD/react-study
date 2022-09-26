import React from "react";

export interface IUserContext {
  userName: string;
}

const UserContext = React.createContext<IUserContext>({
  userName: "YDKD",
});

export default UserContext;
