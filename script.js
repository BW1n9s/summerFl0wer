function dropList(x) {
    // set display to none for class sidedetail if it is block
    if (document.getElementsByClassName("sidedetail")[x].style.display == "block") {
        document.getElementsByClassName("sidedetail")[x].style.display = "none";
    } else {
        document.getElementsByClassName("sidedetail")[x].style.display = "block";
    }

}

function gotoIntro() {
    // goto id intro
    window.location.href = "#intro";
}

function gotoP1() {
    // goto id p1
    window.location.href = "#p1";
}

function gotoP2() {
    // goto id p2
    window.location.href = "#p2";
}

function gotoStart() {
    // goto top of page
    window.location.href = "#";
}