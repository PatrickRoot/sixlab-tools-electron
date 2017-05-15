import Mock from 'mockjs';

console.log("---");

Mock.mock('http://g.cn', {
    'name': '[@name](/user/name)()',
    'age|1-100': 100,
    'color': '[@color](/user/color)'
});