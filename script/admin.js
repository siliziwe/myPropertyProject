localStorage.setItem('myUL', JSON.stringify(myUL));
var myNodelist = document.getElementsByTagName("LI");

// var myNodeList = document.querySelectorAll("LI")
// let m = [...listItem].map(function(item) {
//     return {
//         text: item.querySelector('.title').textContent.trim()
//     }
// })
// localStorage.setItem('layoutlist', JSON.stringify(m));

var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}
//var listitem = document.querySelector('.each-cart-row').textContent;
  //localStorage.setItem('layoutlist', listitem);
  //console.log(localStorage);



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);


function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
    alert("You must write something!");
} else {
    document.getElementById("myUL").appendChild(li);
}
document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}
}


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
    }
  }