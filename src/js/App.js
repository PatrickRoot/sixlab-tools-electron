import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Count from './Count';

import {Input} from 'rctui';

class App extends Component {
    constructor(props){
        super(props);

        let init = {
            base: "14000.00",
            sbase: "17817.00",
            gbase: "17817.00",
            bt: "700.00",
            percent: "15",
        };
        this.state= Count.count(init.base, init.sbase, init.gbase, init.bt, init.percent);
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
                    Welcome to React Native macOS!---------
                </div>

                <div>
                    <div>基薪:</div>

                    <Input
                        value={this.state.base}
                        onChange={(e,text) => this.countBase(text)}
                    />
                </div>

                <div>
                    <div>社保缴费基数:</div>
                    <Input
                        value={this.state.sbase}
                        onChange={(e,text) => this.countsBase(text)}
                    />
                </div>

                <div>
                    <div>公积金缴费基数:</div>
                    <Input
                        value={this.state.gbase}
                        onChange={(e,text) => this.countgBase(text)}
                    />
                </div>

                <div>
                    <div>其他进账:</div>
                    <Input
                        value={this.state.bt}
                        onChange={(e,text) => this.countBt(text)}
                    />
                </div>

                <div>
                    <div>绩效百分比:</div>
                    <Input
                        value={this.state.percent}
                        onChange={(e,text) => this.countPercent(text)}
                    />
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

export default App;
