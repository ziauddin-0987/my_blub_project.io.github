const a = document.getElementById("but");

const b = document.getElementById("bulab");

var c = 0;

a.addEventListener("click", function () {
  if (c == 0) {
    b.style.backgroundColor = "yellow";
    console.log("chack  the blub on");
    c = 1;
  } else {
    b.style.backgroundColor = "transparent";
    console.log("chack  the blub off");
    c = 0;
  }
});
