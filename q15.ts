let Guest=["Shahmir","Usama","Shahzaib"];
for(let i=0;i<Guest.length;i++){
 console.log("Greetings "+Guest[i]+" i would be very glad if you can come to me for dinner. Your Presence is highly appreciated");
}
console.log("\n\n")
console.log("sorry to hear that "+Guest[2]+"could reach bc of some work");
Guest[2]="wasiq";
console.log("\n\n")
for(let i=0;i<Guest.length;i++){
 console.log("Greetings again "+Guest[i]+"we did some changes in invitations. Your Presence is highly appreciated");
}
