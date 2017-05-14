import React, {Component} from 'react';
import {Layout, Icon, Row, Col, Tag} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const CheckableTag = Tag.CheckableTag;

import ToolsItems, {ToolsMenus} from './ToolsItems';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultKey: ToolsItems.getOpenKey(),
            collapsed: false
        };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    changeMenuSelect(){
        this.setState({
            defaultKey: ToolsItems.getOpenKey(),
            collapsed: true
        });
    }

    setting() {
        ToolsItems.changeOpenKey("setting");
        this.changeMenuSelect();
    }

    render() {
        let title = ToolsItems.getTitle();
        let content = ToolsItems.getContent();
        return (
            <Layout>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.toggle.bind(this)}
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo">六楼工具</div>
                    <ToolsMenus
                        defaultKey={this.state.defaultKey}
                        changeMenuSelect={this.changeMenuSelect.bind(this)}
                    />
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Row type="flex" style={{height: 64}}>
                            <Col span={8}/>
                            <Col span={8}>
                                <Row type="flex" justify="center" align="middle"
                                     style={{height: 64, fontSize: 30, color: "#12D3FF"}}>
                                    {title}
                                </Row>
                            </Col>
                            <Col span={8}>
                                <Row type="flex" justify="end" align="middle" style={{height: 64}}>
                                    <CheckableTag
                                        style={{fontSize: 28, marginRight: 18, height: 44, padding: 8}}
                                        onChange={this.setting.bind(this)}
                                    >
                                        <Icon className="icon-shezhi"/>
                                    </CheckableTag>
                                </Row>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}} className="frame-content">
                            {content}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        六楼工具 ©2017 Created by Patrick Root( https://sixlab.cn/ )
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;