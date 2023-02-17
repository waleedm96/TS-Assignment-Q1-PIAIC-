function make_car(Manufacturer,Model,...options){
 let car_dic={
  'Manufacturer':Manufacturer,
  'Model':Model,
 }
 options.forEach((option)=>{
  let [key,value]=option;
  car_dic[key]=value;
 });
 return car_dic
}
console.log(make_car('Honda','Civic',['Color','Blue'],['Alloyrims','Yes']));