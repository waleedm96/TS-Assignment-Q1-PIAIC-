function make_sandws() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\t\t\t\ti will make you a yummy sandwich\n");
    for (var i = 0; i < items.length; i++) {
        console.log("adding " + items[i] + " to your sandwich");
    }
    ;
    console.log("\n");
    console.log("\t\t\t\tyour sandwich is ready");
    console.log("\n\n");
}
make_sandws("chicken", "Tomato", "Ketchup", "cheese", "fries");
make_sandws("Grilled chicken", "pickle", "Onion", "fries", "extra-Cheese");
make_sandws("pickle", "Mayo", "Ketchup", "onion", "bbq chicken");
