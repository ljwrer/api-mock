/**
 * Created by Ray on 2016/5/16.
 */
var Mock=require('mockjs');
var Random = Mock.Random;
module.exports.check = function (req, res, next) {
    var index = req.body['index'] || '';
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-200': [{
            'id|+1': 1,
            'name|1':'@cname',
            'age|+2':'@natural(0, 100)'
        }]
    });
    res.json(data);
};