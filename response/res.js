exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'message': "Success",
        'values': values
    };
    res.json(data);
    res.end();
};

exports.err = function (values, res) {
    var data = {
        'status': 500,
        'message': "Failed",
        'values': values
    };
    res.json(data);
    res.end();
};

exports.datanotfound = function (values, res) {
    var data = {
        'status': 404,
        'message': "Data Not Found",
        'values': values
    };
    res.json(data);
    res.end();
};