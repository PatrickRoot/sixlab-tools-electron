import React, {Component} from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Count from './tools/Count';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

class Salary extends Component {
    constructor(props) {
        super(props);

        let init = {
            base: "2000",
            sbase: "1000",
            gbase: "1000",
            bt: "17817",
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
                    <TextField
                        defaultValue={this.state.base}
                        floatingLabelText="基薪"
                        hintText="基薪"
                        onChange={(event, value) => this.countBase(value)}/>
                </div>

                <div>
                    <TextField
                        defaultValue={this.state.sbase}
                        floatingLabelText="社保基数"
                        hintText="社保基数"
                        onChange={(event, value) => this.countsBase(value)}
                    />
                </div>

                <div>
                    <TextField
                        defaultValue={this.state.gbase}
                        floatingLabelText="公积金基数"
                        hintText="公积金基数"
                        onChange={(event, value) => this.countgBase(value)}
                    />
                </div>

                <div>
                    <TextField
                        defaultValue={this.state.bt}
                        floatingLabelText="补贴等"
                        hintText="补贴等"
                        onChange={(event, value) => this.countBt(value)}
                    />
                </div>

                <div>
                    <TextField
                        defaultValue={this.state.percent}
                        floatingLabelText="绩效百分比"
                        hintText="绩效百分比"
                        onChange={(event, value) => this.countPercent(value)}/>
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
