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

export default Count;
