let magician_n=['Ali','Usman','Noman','Hasnain'];

function show_magi(magician_n){
 for(let i=0;i<magician_n.length;i++){
  console.log(magician_n[i]);
 }
 console.log("\n\n");
}
show_magi(magician_n)

let new_ar=[""];
function make_great(magician_n){
 for(let i=0;i<magician_n.length;i++){
  new_ar[i]=magician_n[i]+' the great magician';
 }
 for(let i=0;i<magician_n.length;i++){
  console.log(new_ar[i]);
 }

}
make_great(new_ar);

console.log("\n\n")
show_magi(magician_n);
show_magi(new_ar);
