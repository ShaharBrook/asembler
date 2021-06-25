import './app.css';
import React, {Component} from "react";
import {MyContext} from "../context/context";
import CodeArea from "./codeArea/codeArea";

class App extends Component {

    state = {
        a: 6,
        incA: () => {
            this.setState({a: this.state.a + 1})
        }
    };

    render() {
        return (
            <MyContext.Provider value={this.state}>
                <div className="app full-container">
                    <CodeArea/>
                    <div className='code'>
                        code {this.state.a}
                    </div>
                </div>
            </MyContext.Provider>
        );
    }

}

export default App;
