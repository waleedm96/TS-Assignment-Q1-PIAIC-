var us_names = ['shahmir', 'wasiq', 'shahzaib', 'admin', 'ayan'];
for (var i = 0; i < us_names.length; i++) {
    if (us_names[i] == 'admin') {
        console.log("Hello, admin would you like to see status reports");
        console.log("\n");
    }
    else {
        console.log("Hello, " + us_names[i] + " Thankyou for logging in");
        console.log("\n");
    }
}
