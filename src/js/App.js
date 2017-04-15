import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open:false
        };
    }

    render() {
        return (
            <div>
                <AppBar
                    title="tool box"
                />
                <div>
                    <Drawer width={200} openSecondary={true} open={this.state.open}>
                        <AppBar title="AppBar"/>
                    </Drawer>
                    <RaisedButton
                        label="Toggle Drawer"
                        onTouchTap={() => this.setState({open: !this.state.open})}
                    />
                </div>
            </div>
        );
    }
}

export default App;
