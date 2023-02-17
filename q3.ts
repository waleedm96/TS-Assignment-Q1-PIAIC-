let isName="waleed";
console.log(isName.toUpperCase());
console.log(isName.toLowerCase());
let tCase=isName.replace(/(^|\s)\S/g,function(title){return title.toUpperCase()});
console.log(tCase);
