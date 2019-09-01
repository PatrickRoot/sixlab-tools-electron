import React, {Component} from 'react';
import {InputNumber} from 'antd';

class Count {
    static count(base, sbase, gbase, bt, percent) {
        let s1 = parseFloat(sbase) * 0.08;
        let s2 = parseFloat(sbase) * 0.02;
        let s3 = parseFloat(sbase) * 0.005;
        
        let s = s1 + s2 + s3;
        
        let g = parseFloat(gbase) * 0.07;
        
        let jx = parseFloat(base) * 3 * (parseFloat(percent) - 15) / 100;
        
        let ys = parseFloat(base) + parseFloat(bt) + parseFloat(base) * 0.15 - s - g + jx;
        
        let shui = 0;
        
        let yse = ys - 3500;
        if (yse <= 0) {
            shui = 0;
        } else if (yse <= 1500) {
            shui = yse * 3 / 100;
        } else if (yse <= 4500) {
            shui = yse * 10 / 100 - 105;
        } else if (yse <= 9000) {
            shui = yse * 20 / 100 - 555;
        } else if (yse <= 35000) {
            shui = yse * 25 / 100 - 1005;
        } else if (yse <= 55000) {
            shui = yse * 30 / 100 - 2755;
        } else if (yse <= 80000) {
            shui = yse * 35 / 100 - 5505;
        } else {
            shui = yse * 45 / 100 - 13505;
        }
        
        let end = ys - shui;
        
        return {
            base: base,
            sbase: sbase,
            gbase: gbase,
            bt: bt,
            percent: percent,
            jx: jx.toFixed(2),
            ys: ys.toFixed(2),
            shui: shui.toFixed(2),
            s: s.toFixed(2),
            g: g.toFixed(2),
            end: end.toFixed(2),
        };
    }
}

class Salary extends Component {
    constructor(props) {
        super(props);

        let init = {
            base: "14500",
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
