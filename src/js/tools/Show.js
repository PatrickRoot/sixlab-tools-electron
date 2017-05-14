/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * http://sixlab.cn/
 */
import React, {Component} from 'react';

import {Form, Input, Collapse, Card, Icon, Transfer, Button} from 'antd';

import ToolsItems from '../ToolsItems'

const Panel = Collapse.Panel;
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 3},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10},
    },
};

class Show extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: localStorage.getItem("user"),
            pwd: localStorage.getItem("pwd"),
            data: ToolsItems.defaultTools(),
            targetKeys: []
        };
    }
    
    changeData(key, e) {
        localStorage.setItem(key, e.target.value);
    }
    
    filterOption(inputValue, option) {
        return option.title.indexOf(inputValue) > -1;
    }
    
    onSelectChange(sourceSelectedKeys, targetSelectedKeys) {
        let selectTools = ToolsItems.selectTools();
        let defaultTools = ToolsItems.defaultTools();
        let newData = selectTools.filter(function (item) {
            return sourceSelectedKeys.indexOf(item.key) < 0;
        });
        
        targetSelectedKeys.forEach(function (key) {
            ToolsItems.defaultTools().forEach(function (item) {
                if (item.key === key) {
                    newData.push(item);
                }
            })
        });
        
        ToolsItems.setSelectTools(newData);
        
        let targetKeys = this.state.targetKeys;
        targetKeys = targetKeys.filter(function (item) {
            return targetSelectedKeys.indexOf(item) < 0;
        });
        sourceSelectedKeys.forEach(function (item) {
            targetKeys.push(item);
        });
        
        let data = newData;
        targetKeys.forEach(function (key) {
            defaultTools.forEach(function (item) {
                if (key === item.key) {
                    data.push(item);
                }
            });
        });
        
        this.setState({
            data: data,
            targetKeys: targetKeys
        });
    }
    
    componentDidMount() {
        this.loadData();
    }
    
    loadData() {
        let selectTools = ToolsItems.selectTools();
        let defaultTools = ToolsItems.defaultTools();
        let data = ToolsItems.selectTools();
        
        let targetKeys = [];
        defaultTools.forEach(function (item) {
            let enable = false;
            selectTools.forEach(function (enableItem) {
                if (item.key === enableItem.key) {
                    enable = true;
                }
            });
            
            if (!enable) {
                data.push(item);
                targetKeys.push(item.key);
            }
        });
        
        this.setState({
            data: data,
            targetKeys: targetKeys
        });
    }
    
    clear() {
        localStorage.clear();
        ToolsItems.changeOpenKey("setting");
        this.loadData();
    }
    
    btn() {
        return <Button type="small" style={{float: 'right', margin: 5}} onClick={this.clear.bind(this)}>重置所有菜单</Button>;
    }
    
    render() {
        
        return (
            <Collapse accordion bordered={false} defaultActiveKey={['menu']}>
                <Panel header={'This is panel header 1'} key="1">
                    <Icon type="rili"/>
                </Panel>
                <Panel header='菜单设置' key="menu">
                    <Card>
                        <Transfer
                            showSearch
                            listStyle={{width: 200, height: 300}}
                            titles={['启用的工具', '禁用的工具']}
                            dataSource={this.state.data}
                            targetKeys={this.state.targetKeys}
                            filterOption={this.filterOption.bind(this)}
                            onSelectChange={this.onSelectChange.bind(this)}
                            render={item => item.title}
                            footer={this.btn.bind(this)}
                        />
                    </Card>
                </Panel>
                <Panel header='用户信息设置' key="user">
                    <Card>
                        <Form>
                            <FormItem
                                {...formItemLayout}
                                label="用户名"
                                hasFeedback
                            >
                                <Input
                                    defaultValue={this.state.user}
                                    placeholder="用户名"
                                    onChange={this.changeData.bind(this, 'user')}/>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="token"
                                hasFeedback
                            >
                                <Input
                                    defaultValue={this.state.pwd}
                                    placeholder="token"
                                    onChange={this.changeData.bind(this, 'pwd')}/>
                            </FormItem>
                        </Form>
                    </Card>
                </Panel>
            </Collapse>
        );
    }
}

export default Show;