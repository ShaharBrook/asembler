import './app.css';
import React, {Component} from "react";
import {AppContext, defaultParams} from "../context/context";
import CodeArea from "./codeArea/codeArea";
import DataArea from "./dataArea/dataArea";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = defaultParams;
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <div className="app full-container">
                    <CodeArea/>
                    <DataArea/>
                </div>
            </AppContext.Provider>
        );
    }

}

export default App;
