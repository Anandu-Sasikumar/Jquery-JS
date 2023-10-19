var image = document.getElementById("img1");
var widthpx = document.getElementById("wpx");
var widthpercent = document.getElementById("wp");
var heightpx = document.getElementById("hpx");
var heightpercent = document.getElementById("hp");
var text = document.getElementById("link");
var link = document.getElementById("a");
var newtab = document.getElementById("check");

function test(){
    image.style.width = widthpx.value + "px";
    image.style.width = widthpercent.value + "%";
    image.style.height = heightpx.value + "px";
    image.style.height = heightpercent.value + "%";

}

function click(){
    if(newtab.checked){
        window.open(paste.value,"_blank")
    }
    else{
        link.setAttribute("href",paste.value)
    }
};