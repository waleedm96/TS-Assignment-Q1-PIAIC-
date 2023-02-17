function make_cars(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_dic = {
        'Manufacturer': Manufacturer,
        'Model': Model
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car_dic[key] = value;
    });
    return car_dic;
}
console.log(make_cars('Honda', 'Civic', ['Color', 'Blue'], ['Alloyrims', 'Yes']));
