import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider, createTheme} from "@material-ui/core/styles"
import {CssBaseline} from "@material-ui/core";
import {lightGreen, blue} from "@material-ui/core/colors";

const darkTheme = createTheme({
    palette: {
        primary: lightGreen,
        secondary: blue,

    },
});

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
