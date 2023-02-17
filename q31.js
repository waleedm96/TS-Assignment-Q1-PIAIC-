var as = [];
if (as.length > 0) {
    for (var i = 0; i < as.length; i++) {
        if (as[i] < 2) {
            console.log("person is baby");
        }
        if (as[i] >= 2 && as[i] < 4) {
            console.log("you are toddler");
        }
        if (as[i] >= 4 && as[i] < 13) {
            console.log("you are a kid");
        }
        if (as[i] >= 13 && as[i] < 20) {
            console.log("you are teenager");
        }
        if (as[i] >= 20 && as[i] < 65) {
            console.log("you are an adult");
        }
        if (as[i] >= 65) {
            console.log("you are an elder person");
        }
    }
}
else {
    console.log("no user is registered to check the age");
}
