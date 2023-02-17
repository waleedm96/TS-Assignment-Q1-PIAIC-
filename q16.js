var In = ["Shahmir", "Usama", "Shahzaib"];
for (var i = 0; i < In.length; i++) {
    console.log("Greetings " + In[i] + " i would be very glad if you can come to me for dinner. Your Presence is highly appreciated");
}
console.log("\n\n");
console.log("sorry to hear that " + In[2] + "could reach bc of some work");
In[2] = "wasiq";
console.log("\n\n");
for (var i = 0; i < In.length; i++) {
    console.log("Greetings again " + In[i] + "we did some changes in invitations. Your Presence is highly appreciated");
}
console.log("\n");
console.log("We found bigger table");
In.unshift("Sachal");
In.push("Shahzaib");
In.splice(2, 0, "waleed");
for (var i = 0; i < In.length; i++) {
    console.log("Greetings again " + In[i] + "we did some changes in invitations. Your Presence is highly appreciated");
}

