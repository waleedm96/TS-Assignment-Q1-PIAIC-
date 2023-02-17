var c_us = ['shahzaib', 'usama', 'wasiq', 'sachal', 'shahmir'];
var n_us = ['wasiq', 'waleed', 'shahzaib', 'ayan', 'shayan'];
for (var i = 0; i < n_us.length; i++) {
    if (n_us[i].toLowerCase == c_us[0].toLowerCase || n_us[i].toLowerCase == c_us[1].toLowerCase || n_us[i].toLowerCase == c_us[2].toLowerCase || n_us[i].toLowerCase == c_us[3].toLowerCase || n_us[i].toLowerCase == c_us[4].toLowerCase) {
        console.log("User name (" + n_us[i] + ") not available");
        console.log("choose different username\n");
    }
    else
        console.log("user name (" + n_us[i] + ") is available\n");
}
