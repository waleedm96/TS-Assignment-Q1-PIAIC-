var aName = "waleed";
console.log(aName.toUpperCase());
console.log(aName.toLowerCase());
var titleCase = aName.replace(/(^|\s)\S/g, function (title) { return title.toUpperCase(); });
console.log(titleCase);
