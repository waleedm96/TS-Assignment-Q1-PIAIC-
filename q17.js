var In = ["Shahmir", "Usama", "Shahzaib"];
for (var i_1 = 0; i_1 < In.length; i_1++) {
    console.log("Greetings " + In[i_1] + " i would be very glad if you can come to me for dinner. Your Presence is highly appreciated");
}
console.log("\n\n");
console.log("sorry to hear that " + In[2] + "could reach bc of some work");
In[2] = "wasiq";
console.log("\n\n");
for (var i_2 = 0; i_2 < In.length; i_2++) {
    console.log("Greetings again " + In[i_2] + " we did some changes in invitations. Your Presence is highly appreciated");
}
console.log("\n");
console.log("We found bigger table");
In.unshift("Sachal");
In.push("Shahzaib");
In.splice(2, 0, "waleed");
for (var i_3 = 0; i_3 < In.length; i_3++) {
    console.log("Greetings again " + In[i_3] + " we did some changes in invitations. Your Presence is highly appreciated");
}
console.log("\n");
console.log("Sorry we have only space for two person");
console.log("\n\n");
console.log(In[0] + " sorry we cant invite you to dinner");
In.splice(0, 1);
console.log(In[0] + " sorry we cant invite you to dinner");
In.splice(0, 1);
console.log(In[0] + " sorry we cant invite you to dinner");
In.splice(0, 1);
console.log(In[0] + " sorry we cant invite you to dinner");
In.splice(0, 1);
console.log("\n\n");
for (var i_4 = 0; i_4 < In.length; i_4++) {
    console.log("i am glad to inform that you are still invited " + In[i_4]);
}
console.log("\n\n");
In.splice(0, 1);
In.splice(0, 1);
for (var i = 0; i < In.length; i++) {
    console.log(In[i]);
}
