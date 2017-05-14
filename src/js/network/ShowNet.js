/*
 * Copyright (c) 2017 Sixlab. All rights reserved.
 *
 * Under the GPLv3(AKA GNU GENERAL PUBLIC LICENSE Version 3).
 * see http://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * For more information, please see
 * http://sixlab.cn/
 */
import $ from 'jquery';

export default class Show{
    static fetchAllShows(){
        $.ajax({
            url: "https://sixlab.cn/tool/show/search",
            data: {
                keyword: "生活"
            },
            dataType: "json",
            type: "post",
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
}