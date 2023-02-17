var magician_names = ['Ali', 'Usman', 'Noman', 'Hasnain'];
function show_mags(magicians_names) {
    for (var i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i]);
    }
    console.log("\n\n");
}
show_mags(magician_names);
function great_magicians(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        magician_names[i] = magician_names[i] + 'the great magician';
    }
    for (var i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
great_magicians(magician_names);
