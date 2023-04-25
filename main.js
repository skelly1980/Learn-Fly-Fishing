console.log(hello);

//Night Toogle//
function switchMode(){
    var moon = document.getElementById('moon');
    if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#141D26";

        document.body.style.color = "#000";
    }else{
        moon.className = "moon";
        document.body.style.backgroundColor = "#fff";

        document.body.style.color = "#000";
    }
}

//menu bar//
var btn = document.getElementById("menu-btn");
var nav = document.getElementById("menu");

function navToggle(){
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

//email submit aboutme page//
var button = document.getElementById("submit");
var fname = document.getElementById("fname");

function thanks(){
    button = document.getElementById("submit").value;
    fname = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = "<div style='background-color:green; color:white; font-size:1.5em;'>Thank you " + fname + "," + " an email has been sent to your inbox.</div>";
}


//Card flip on gear page//
var card1 = document.querySelector(".card-inner-1");
var card2 = document.querySelector(".card-inner-2");
var card3 = document.querySelector(".card-inner-3");

card1.addEventListener("click", function(){
    card1.classList.toggle("is-flipped");
});

card2.addEventListener("click", function(){
    card2.classList.toggle("is-flipped");
});

card3.addEventListener("click", function(){
    card3.classList.toggle("is-flipped");
});
