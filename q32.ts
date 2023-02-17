let c_u=['shahzaib','usama','wasiq','sachal','shahmir'];
let n_u=['wasiq','waleed','shahzaib','ayan','shayan'];

for(let i=0;i<n_u.length;i++){
  if(n_u[i].toLowerCase==c_u[0].toLowerCase || n_u[i].toLowerCase==c_u[1].toLowerCase || n_u[i].toLowerCase==c_u[2].toLowerCase || n_u[i].toLowerCase==c_u[3].toLowerCase || n_u[i].toLowerCase==c_u[4].toLowerCase){
   console.log("User name ("+n_u[i]+") not available");
   console.log("choose different username\n");}
  else
   console.log("user name ("+n_u[i]+") is available\n")
  }

 