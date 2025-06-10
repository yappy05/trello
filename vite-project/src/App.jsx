import React, {Component} from 'react';
import Header from "./components/header/Header.jsx";
import WorkSpace from "./components/workspace/WorkSpace.jsx";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <WorkSpace />
            </div>
        );
    }
}

export default App;