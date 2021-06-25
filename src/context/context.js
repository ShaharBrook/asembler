import * as React from "react";

export const defaultParams = {
    run: (text) => {
        console.log(text);
    }
};

export const AppContext = React.createContext(defaultParams);