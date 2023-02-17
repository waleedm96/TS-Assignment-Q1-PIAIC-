var magician_ns = ['Ali', 'Usman', 'Noman', 'Hasnain'];
function show_magis(magician_ns) {
    for (var i = 0; i < magician_ns.length; i++) {
        console.log(magician_ns[i]);
    }
    console.log("\n\n");
}
show_magis(magician_ns);
var new_ars = [""];
function make_greats(new_ars) {
    for (var i = 0; i < magician_ns.length; i++) {
        new_ars[i] = magician_ns[i] + ' the great magician';
    }
    for (var i = 0; i < magician_ns.length; i++) {
        console.log(new_ars[i]);
    }
    console.log("\n\n");
}
make_greats(new_ars);



//checking array if it contains both arrays
show_magis(magician_ns);
show_magis(new_ars);
