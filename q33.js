var o_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < o_nums.length; i++) {
    if (o_nums[i] == 1) {
        console.log(o_nums[i] + "st");
    }
    if (o_nums[i] == 2) {
        console.log(o_nums[i] + "nd");
    }
    if (o_nums[i] == 3) {
        console.log(o_nums[i] + "rd");
    }
    if (o_nums[i] >= 4)
        console.log(o_nums[i] + "th");
}
