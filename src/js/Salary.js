import React, {Component} from 'react';
import Count from './tools/Count';

import {InputNumber} from 'antd';

class Salary extends Component {
    constructor(props) {
        super(props);

        let init = {
            base: "14000",
            sbase: "17817",
            gbase: "17817",
            bt: "700",
            percent: "15"
        };
        this.state = Count.count(init.base, init.sbase, init.gbase, init.bt, init.percent);
    }

    countChange(base, sbase, gbase, bt, percent) {
        this.setState(Count.count(base, sbase, gbase, bt, percent));
    }

    countBase(text) {
        this.countChange(text, this.state.sbase, this.state.gbase, this.state.bt, this.state.percent);
    }

    countsBase(text) {
        this.countChange(this.state.base, text, this.state.gbase, this.state.bt, this.state.percent);
    }

    countgBase(text) {
        this.countChange(this.state.base, this.state.sbase, text, this.state.bt, this.state.percent);
    }

    countBt(text) {
        this.countChange(this.state.base, this.state.sbase, this.state.gbase, text, this.state.percent);
    }

    countPercent(text) {
        this.countChange(this.state.base, this.state.sbase, this.state.gbase, this.state.bt, text);
    }

    render() {
        return (
            <div>
                <div>
                    Welcome to React Native macOS !
                </div>

                <div>
                    <InputNumber
                        defaultValue={this.state.base}
                        placeholder="基薪"
                        onChange={this.countBase.bind(this)}/>
                </div>

                <div>
                    <InputNumber
                        defaultValue={this.state.sbase}
                        placeholder="社保基数"
                        onChange={this.countsBase.bind(this)}
                    />
                </div>

                <div>
                    <InputNumber
                        defaultValue={this.state.gbase}
                        placeholder="公积金基数"
                        onChange={this.countgBase.bind(this)}
                    />
                </div>

                <div>
                    <InputNumber
                        defaultValue={this.state.bt}
                        placeholder="补贴等"
                        onChange={this.countBt.bind(this)}
                    />
                </div>

                <div>
                    <InputNumber
                        defaultValue={this.state.percent}
                        placeholder="绩效百分比"
                        onChange={this.countPercent.bind(this)}/>
                </div>

                <div>
                    <div>社保:</div>
                    <div>{this.state.s}</div>
                </div>

                <div>
                    <div>公积金:</div>
                    <div>{this.state.g}</div>
                </div>

                <div>
                    <div>应税额:</div>
                    <div>{this.state.ys}</div>
                </div>

                <div>
                    <div>绩效:</div>
                    <div>{this.state.jx}</div>
                </div>

                <div>
                    <div>税务:</div>
                    <div>{this.state.shui}</div>
                </div>

                <div>
                    <div>到手:</div>
                    <div>{this.state.end}</div>
                </div>
            </div>
        );
    }
}

export default Salary;
