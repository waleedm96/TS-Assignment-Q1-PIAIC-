var P = ["Canada", "Australia", "Switzerland", "France", "Turkey"];
var play = '["' + P.join('","') + '"]';
console.log("original order");
console.log(play);
console.log("\n");
var ar2 = P.sort();
var ao4 = '["' + ar2.join('","') + '"]';
console.log("alphabetical order");
console.log(ao4);
console.log("\n");
console.log("original order");
console.log(play);
console.log("\n");
ar2 = ar2.reverse();
var ao3 = '["' + ar2.join('","') + '"]';
console.log("reverse alphabetical order");
console.log(ao3);
console.log("\n");
console.log("original order");
console.log(play);
console.log("\n");
P = P.reverse();
console.log("reverse order");
console.log('["' + P.join('","') + '"]');
console.log("\n");
P = P.reverse();
console.log("original order");
console.log('["' + P.join('","') + '"]');
console.log("\n");
P = P.sort();
console.log("alphabetical order");
console.log('["' + P.join('","') + '"]');
console.log("\n");
P = P.reverse();
console.log("reverse alphabetical order");
console.log('["' + P.join('","') + '"]');
console.log("\n");