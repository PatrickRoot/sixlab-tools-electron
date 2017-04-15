import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './css/index.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(lightBaseTheme);

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root')
);