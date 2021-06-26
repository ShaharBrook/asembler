import * as React from "react";

export const defaultParams = {
    run: (text) => {
        console.log(text);
    },
    registers: [0,0,0]
};

export const AppContext = React.createContext(defaultParams);