import React from "react";
import ReactDOM from "react-dom";
import {Screen} from "./components/screen";
import PyBooks from "./components/PyBooks";
import MLBooks from "./components/MLBooks";

class Mother extends React.Component {
    render(){
        return <div>
            <Screen />
            <PyBooks />
            <MLBooks />
        </div>
    }
}

const appRoots = document.getElementById('app2');
const appRoot = document.getElementById('app');

ReactDOM.render(<Mother/>, appRoot);