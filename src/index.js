import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import $ from 'jquery';
import ToolsItems from './js/ToolsItems';

import './css/index.css';
import './css/iconfont.css';

window.$ = $;

let version = 2;

let storage = localStorage.getItem("version");
if(storage===undefined || Number(storage) < version){
    localStorage.clear();
}
localStorage.setItem("version", version);
ToolsItems.changeOpenKey("setting");

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
