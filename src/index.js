import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import $ from 'jquery';

import './css/index.css';

window.$ = $;

ReactDOM.render(<App />, document.getElementById("root"));

$(document).ready(function () {
    function resizeMenu() {
        var height = $(window).height();
        var contentHeight = height - 202;
        $(".frame-content").height(contentHeight);
        $(".ant-layout").height(height);
    }

    $(window).resize(function () {
        resizeMenu();
    });

    resizeMenu();
});
