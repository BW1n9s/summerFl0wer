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

function gotoWork1() {
    // goto id work1
    window.location.href = "#work1";
}

function gotoWork2() {
    // goto id work2
    window.location.href = "#work2";
}

function gotoWork3() {
    // goto id work3
    window.location.href = "#work3";
}

function gotoWork31() {
    // goto id work31
    window.location.href = "#work31";
}

function gotoWork4() {
    // goto id work4
    window.location.href = "#work4";
} 

function gotoRef() {
    // goto id ref
    window.location.href = "#ref";
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