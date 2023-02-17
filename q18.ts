let Place=["Canada","Australia","Switzerland","France","Turkey"];

let pla='["'+Place.join('","')+'"]';
console.log("original order");
console.log(pla);
console.log("\n");
let arr2=Place.sort();
let aor='["'+arr2.join('","')+'"]';
console.log("alphabetical order");
console.log(aor);
console.log("\n");
console.log("original order");
console.log(pla);
console.log("\n");
arr2=arr2.reverse()
let ao='["'+arr2.join('","')+'"]';
console.log("reverse alphabetical order");
console.log(ao);
console.log("\n");
console.log("original order");
console.log(pla);
console.log("\n");
Place=Place.reverse()
console.log("reverse order");
console.log('["'+Place.join('","')+'"]');
console.log("\n");
Place=Place.reverse()
console.log("original order");
console.log('["'+Place.join('","')+'"]');
console.log("\n");
Place=Place.sort()
console.log("alphabetical order");
console.log('["'+Place.join('","')+'"]');
console.log("\n");
Place=Place.reverse()
console.log("reverse alphabetical order");
console.log('["'+Place.join('","')+'"]');
console.log("\n");