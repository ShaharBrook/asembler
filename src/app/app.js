import './app.css';
import React, {Component} from "react";
import {AppContext, defaultParams} from "../context/context";
import DevelopmentArea from "./codeArea/developmentArea";
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
                    <DevelopmentArea/>
                    <DataArea/>
                </div>
            </AppContext.Provider>
        );
    }

}

export default App;
