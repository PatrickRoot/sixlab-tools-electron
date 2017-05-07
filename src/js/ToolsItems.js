import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import Salary from './Salary';
import Setting from './Setting';

const tools = [
    {key: "index", clz: "", title: "首页", menu: true, chosen: true, icon: "appstore-o"},
    {key: "Salary", clz: Salary, title: "工具", menu: true, chosen: true, icon: "appstore-o"},
    {key: "setting", clz: Setting, title: "设置", menu: true, chosen: true, icon: "setting"},
];

tools[0].description = "0";
tools[1].description = "1";
tools[2].description = "2";

class ToolsItems {
    static getOpenKey() {
        let key = localStorage.getItem("lastOpenKey");
        if (!key) {
            key = this.selectMenus()[0].key;
            this.changeOpenKey(key);
        }
        return key;
    }

    static changeOpenKey(key){
        localStorage.setItem("lastOpenKey", key);
    }

    static getContent() {
        let key = this.getOpenKey();

        let content = "六楼工具";
        for (let i in tools) {
            let menu = tools[i];
            if (menu.key === key && menu.clz) {
                let Clz = menu.clz;
                content = <Clz />;
                break;
            }
        }

        return content;
    }

    static getTitle() {
        let selectMenus = this.selectMenus();

        let key = this.getOpenKey();

        let title = "六楼工具";

        for (let i in selectMenus) {
            let menu = selectMenus[i];
            if (menu.key === key) {
                title = menu.title
            }
        }

        return title;
    }

    static defaultMenus() {
        return tools.filter(function (item) {
            return item.menu;
        })
    }

    static defaultTools() {
        return tools;
    }

    static selectTools() {
        let select = tools;
        let local = localStorage.selectTools;
        if (local) {
            select = JSON.parse(local);
        } else {
            localStorage.selectTools = JSON.stringify(tools);
        }
        return select;
    }

    static selectMenus() {
        let select = this.selectTools();

        return select.filter(function (item) {
            return item.menu;
        })
    }

    static selectMenuByKey(key) {
        return tools.filter(function (tool) {
            return tool.key === key;
        })[0];
    }
}

class ToolsMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    clickItem(e) {
        ToolsItems.changeOpenKey(e.key);
        this.props.changeMenuSelect();
    }

    render() {
        return (
            <Menu theme="dark" mode="inline"
                  onClick={this.clickItem.bind(this)}
                  selectedKeys={[this.props.defaultKey]}>
                {
                    ToolsItems.selectMenus().map((item, index) => {
                        let icon = <Icon type="appstore-o"/>;
                        if (item.icon) {
                            icon = <Icon type={item.icon}/>;
                        }

                        return <Menu.Item key={item.key}>
                            {icon}
                            <span className="nav-text">{item.title}</span>
                        </Menu.Item>
                    })
                }
            </Menu>
        );
    }
}

export {ToolsMenus};
export default ToolsItems;
