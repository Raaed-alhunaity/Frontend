function myFunction() {
    document.getElementById("button").style.backgroundColor = "rgb(52, 84, 97)";
    document.getElementById("button1").style.backgroundColor = "grey";
    document.getElementById("button2").style.backgroundColor = "grey";
    document.getElementById("button3").style.backgroundColor = "grey";
    var node1 = document.getElementById("disabel") .classList.remove('hidden');
    var node2 = document.getElementById("disabel1").classList.remove('hidden');
    var node3 = document.getElementById("disabel2").classList.remove('hidden');
    var node4 = document.getElementById("disabel3").classList.remove('hidden');
        
}

function myFunction1() {
    document.getElementById("button1").style.backgroundColor = "rgb(52, 84, 97)";
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button2").style.backgroundColor = "grey";
    document.getElementById("button3").style.backgroundColor = "grey";
    var div1 = document.getElementById("disabel1").classList.add('hidden');
    var div2 = document.getElementById("disabel2").classList.add('hidden');
    var div3 = document.getElementById("disabel3").classList.add('hidden');
    var div4 = document.getElementById("disabel").classList.remove('hidden');
}
function myFunction2() {
    document.getElementById("button2").style.backgroundColor = "rgb(52, 84, 97)";
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button1").style.backgroundColor = "grey";
    document.getElementById("button3").style.backgroundColor = "grey";
    var div1 = document.getElementById("disabel") .classList.add('hidden');
    var div2 = document.getElementById("disabel2").classList.add('hidden');
    var div3 = document.getElementById("disabel3").classList.add('hidden');
    var div4 = document.getElementById("disabel1").classList.remove('hidden');
}
function myFunction3() {
    var x = document.getElementById("button3").innerHTML;
    document.getElementById("button3").style.backgroundColor = "rgb(52, 84, 97)";
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button1").style.backgroundColor = "grey";
    document.getElementById("button2").style.backgroundColor = "grey";
    var div1 = document.getElementById("disabel") .classList.add('hidden');
    var div2 = document.getElementById("disabel1").classList.add('hidden');
    var div3 = document.getElementById("disabel2").classList.add('hidden');
    var div4 = document.getElementById("disabel3").classList.remove('hidden');
}