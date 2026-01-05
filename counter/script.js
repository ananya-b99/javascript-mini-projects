 // console.log("hello");
 // window.alert("Emergency!!!!!!!");
 // document.getElementById("h1").textContent = 'heyyyy'
 /* let x = 10;
 let y = "ana";
 let z = true;
 document.getElementById("p1").textContent = x;
 document.getElementById("p2").textContent = y;
 document.getElementById("p3").textContent = z; */

 // let x = window.prompt("whats ur name buddy?");
 // let username;
 // document.getElementById("btn").onclick = function() {
 // username = document.getElementById("ip").value;
 //document.getElementById("h1").textContent = `hello, ${username}`;}

 // Type conversion:
 /* let age = window.prompt("wuss ur age goodie????");
 age = Number(age);
 age += 1;
 console.log(age); */

 // counter program

 const dec = document.getElementById("dec");
 const res = document.getElementById("reset");
 const inc = document.getElementById("inc");
 const countlabel = document.getElementById("h1");

 let count = 0;

 inc.onclick = function() {
     count++;
     countlabel.textContent = count;
 }

 res.onclick = function() {
     count = 0;
     countlabel.textContent = count;
 }

 dec.onclick = function() {
     count--;
     countlabel.textContent = count;
 }