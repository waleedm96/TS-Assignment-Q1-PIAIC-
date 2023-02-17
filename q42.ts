let magician_name=['Ali','Usman','Noman','Hasnain'];

function show_mag(magician_name){
 for(let i=0;i<magician_name.length;i++){
  console.log(magician_name[i]);
 }
 console.log("\n\n");
}
show_mag(magician_name);

function great_magician(magician_name){
 for(let i=0;i<magician_name.length;i++){
  magician_name[i]=magician_name[i]+' the great magician';
 }
 for(let i=0;i<magician_name.length;i++){
  console.log(magician_name[i]);
 }

}
great_magician(magician_name);
