let a=[];
if(a.length>0){
 for(let i=0;i<a.length;i++){
  if(a[i]<2){
   console.log("person is baby");
  }
  if(a[i]>=2&&a[i]<4){
   console.log("you are toddler");
  }
  if(a[i]>=4&&a[i]<13){
   console.log("you are a kid");
  }
  if(a[i]>=13&&a[i]<20){
   console.log("you are teenager");
  }
  if(a[i]>=20&&a[i]<65){
   console.log("you are an adult");
  }
  if(a[i]>=65){
   console.log("you are an elder person");
 }
}
}
else{
 console.log("no user is registered to check the age");
} 


