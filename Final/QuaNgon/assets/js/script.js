// SERVICE SWITCH
const pd = document.querySelectorAll(".private-dining")
const os = document.querySelectorAll(".off-site")
const md = document.querySelectorAll(".main-dining")
console.log(pd[0])
function FuncServices(s) {
    pd[2].style.display = "none"
    pd[1].style.display = "none"
    os[2].style.display = "none"
    os[1].style.display = "none"
    md[2].style.display = "none"
    md[1].style.display = "none"
    pd[0].style.color = "#A6A6A6"
    os[0].style.color = "#A6A6A6"
    md[0].style.color = "#A6A6A6"
    pd[0].style.border = "none"
    os[0].style.border = "none"
    md[0].style.border = "none"
    if (s == 1){
        pd[2].style.display = "block"
        pd[1].style.display = "block"
        pd[0].style.color = "#E4C590"
        pd[0].style.borderBottom = "1px solid #E4C590"
    }else if (s == 2) {
        md[0].style.color = "#E4C590"
        md[2].style.display = "block"
        md[1].style.display = "block"
        md[0].style.borderBottom = "1px solid #E4C590"          
    } else {
        os[0].style.color = "#E4C590"
        os[2].style.display = "block"
        os[1].style.display = "block"
        os[0].style.borderBottom = "1px solid #E4C590"   
    }
}

// MENU SWITCH
const mds = document.querySelectorAll(".main-dishes")
const b = document.querySelectorAll(".beverage")
const d = document.querySelectorAll(".dessert")
function FuncMenu(s) {
    mds[0].style.color = "#A6A6A6"
    b[0].style.color = "#A6A6A6"
    d[0].style.color = "#A6A6A6"
    mds[0].style.border = "none"
    b[0].style.border = "none"
    d[0].style.border = "none"
    mds[1].style.display = "none"
    b[1].style.display = "none"
    d[1].style.display = "none"
    if (s == 1){
        mds[1].style.display = "block"
        mds[0].style.color = "#E4C590"
        mds[0].style.borderBottom = "1px solid #E4C590"
    }else if (s == 2) {
        b[1].style.display = "block"
        b[0].style.color = "#E4C590"
        b[0].style.borderBottom = "1px solid #E4C590"          
    } else {
        d[1].style.display = "block"
        d[0].style.color = "#E4C590"
        d[0].style.borderBottom = "1px solid #E4C590"   
    }
}

// DROPDOWN MENU
function dropdownMenu() {
    var x = document.querySelector(".dropdown-content")
    console.log(x)
    if (x.style.display == "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}