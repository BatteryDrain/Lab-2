//function clearSelectedButton() {
//    const allButtons = document.querySelectorAll('button');
//    allButtons.forEach(button => button.classList.remove('selected'));
//}

document.getElementById("bighorn").addEventListener("click", function () {
    blackbear.classList.remove('selected');
    moose.classList.remove('selected');
    wolf.classList.remove('selected');
    elk.classList.remove('selected');
    //clearBackgroundClasses();
    this.classList.add('selected');
    console.log("bighorn");
    document.getElementById("natureimage").src = "images/sheep.webp";
});

document.getElementById("blackbear").addEventListener("click", function () {
    bighorn.classList.remove('selected');
    moose.classList.remove('selected');
    wolf.classList.remove('selected');
    elk.classList.remove('selected');
    //clearBackgroundClasses();
    this.classList.add('selected');
    console.log("blackbear");
    document.getElementById("natureimage").src = "images/bear.webp";
});

document.getElementById("moose").addEventListener("click", function () {
    blackbear.classList.remove('selected');
    bighorn.classList.remove('selected');
    wolf.classList.remove('selected');
    elk.classList.remove('selected');
    //clearBackgroundClasses();
    this.classList.add('selected');
    console.log("moose");
    document.getElementById("natureimage").src = "images/moose.webp";
});

document.getElementById("wolf").addEventListener("click", function () {
    blackbear.classList.remove('selected');
    moose.classList.remove('selected');
    bighorn.classList.remove('selected');
    elk.classList.remove('selected');
    //clearBackgroundClasses();
    this.classList.add('selected');
    console.log("wolf");
    document.getElementById("natureimage").src = "images/wolf.webp";
});

document.getElementById("elk").addEventListener("click", function () {
    blackbear.classList.remove('selected');
    moose.classList.remove('selected');
    wolf.classList.remove('selected');
    bighorn.classList.remove('selected');
    //clearBackgroundClasses();
    this.classList.add('selected');
    console.log("elk");
    document.getElementById("natureimage").src = "images/elk.webp";
});
