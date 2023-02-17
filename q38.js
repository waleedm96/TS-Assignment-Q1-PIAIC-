function describe_citys(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is located in " + country);
}
describe_citys('Rawalpindi');
describe_citys('Lahore');
describe_citys('Toronto', 'Canada');
