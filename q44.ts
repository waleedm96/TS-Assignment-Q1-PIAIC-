function make_sandw(...items){
 console.log("\t\t\t\ti will make you a yummy sandwich\n");
 for(let i=0;i<items.length;i++){
  console.log("adding "+items[i]+" to your sandwich");
 };
 console.log("\n");
console.log("\t\t\t\tyour sandwich is ready");
console.log("\n\n");
}

make_sandw("chicken","Tomato","Ketchup","cheese","fries")
make_sandw("Grilled chicken","pickle","Onion","fries","extra-Cheese")
make_sandw("pickle","Mayo","Ketchup","onion","bbq chicken")