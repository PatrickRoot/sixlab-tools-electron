import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import Salary from './tools/Salary';
import Setting from './tools/Setting';
import Show from './tools/Show';

const tools = [
    {key: "index", clz: "", title: "首页", menu: true, disabled: true, icon: "icon-shouye"},
    {key: "Show", clz: Show, title: "电视剧", menu: true, disabled: false, icon: "icon-dianshi"},
    {key: "Salary", clz: Salary, title: "工资计算器", menu: true, disabled: false, icon: "icon-tubiao98"},
    {key: "Salary2", clz: Salary, title: "工具2", menu: true, disabled: false, icon: "iron-rili"},
    {key: "Salary3", clz: Salary, title: "工具3", menu: true, disabled: false, icon: "iron-rili"},
    {key: "setting", clz: Setting, title: "设置", menu: true, disabled: false, icon: "iron-setting"},
];

class ToolsItems {
    /**
     * 获取最后打开的 Key，即当前打开的 key
     */
    static getOpenKey() {
        let key = localStorage.getItem("lastOpenKey");
        if (!key) {
            key = this.selectMenus()[0].key;
            this.changeOpenKey(key);
        }
        return key;
    }
    
    /**
     * 改变最后打开的 key
     * @param key
     */
    static changeOpenKey(key){
        localStorage.setItem("lastOpenKey", key);
    }
    
    /**
     * 获取当前 content 的内容
     * @returns {string}
     */
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
    
    /**
     * 获取当前的 Title
     * @returns {string}
     */
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
    
    /**
     * 获取默认的菜单
     * @returns {Array.<*>}
     */
    static defaultMenus() {
        return tools.filter(function (item) {
            return item.menu;
        })
    }
    
    /**
     * 获取默认的工具
     * @returns {[*,*,*]}
     */
    static defaultTools() {
        return tools;
    }
    
    /**
     * 获取已启用的工具，默认是所有工具
     * @returns {[*,*,*]}
     */
    static selectTools() {
        let select = tools;
        let local = localStorage.getItem("selectTools");
        if (local) {
            select = JSON.parse(local);
        } else {
            localStorage.setItem("selectTools", JSON.stringify(select));
        }
        return select;
    }
    
    /**
     * 选中工具
     * @param selectTools
     */
    static setSelectTools(selectTools){
        localStorage.setItem("selectTools", JSON.stringify(selectTools));
    }
    
    /**
     * 获取已启用的菜单，默认是所有菜单，去的是默认工具中的菜单项
     * @returns {Array.<*|*|*>}
     */
    static selectMenus() {
        let select = this.selectTools();

        return select.filter(function (item) {
            return item.menu;
        })
    }
    
    /**
     * 根据 key 获取当前的 菜单/工具
     * @param key
     * @returns {*}
     */
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
                        let icon = <Icon className="icon-rili"/>;
                        if (item.icon) {
                            icon = <Icon className={item.icon}/>;
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
