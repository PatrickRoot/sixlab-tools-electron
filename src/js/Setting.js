import React, {Component} from 'react';

import {Form, Input, Collapse, Card, Transfer} from 'antd';

import ToolsItems from './ToolsItems'

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

class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: localStorage.user,
            pwd: localStorage.pwd,
            mockData: [],
            targetKeys: [],
        };
    }

    changeData(key, e) {
        localStorage.setItem(key, e.target.value);
    }

    componentDidMount() {
        this.getMock();
    }

    getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({mockData, targetKeys});
    }

    filterOption(inputValue, option) {
        return option.description.indexOf(inputValue) > -1;
    }

    handleChange(targetKeys) {
        this.setState({targetKeys});
    }

    render() {
        return (
            <Collapse accordion bordered={false} defaultActiveKey={['menu']}>
                <Panel header={'This is panel header 1'} key="1">
                    <p>123</p>
                </Panel>
                <Panel header='菜单设置' key="menu">
                    <Card>
                        <Transfer
                            dataSource={ToolsItems.sel}
                            showSearch
                            filterOption={this.filterOption}
                            targetKeys={this.state.targetKeys}
                            onChange={this.handleChange}
                            render={item => item.title}
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

export default Setting;
