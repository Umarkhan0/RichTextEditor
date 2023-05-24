let text = document.getElementById("text");
function color(){
    let changSize = document.getElementById("color").value;
text.style.color = changSize;
}function backGround(){
    let changBack = document.getElementById("backGround").value;
    text.style.background = changBack; 
}function fontSize(){
    let changFont = document.getElementById("fontSize").value;
    text.style.fontSize = changFont + "rem";
}function Faimely(){
    let fontFaimly =  document.getElementById("Faimely").value;
    text.style.fontFamily = fontFaimly;
}function bold(){
    if (text.style.fontWeight == "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold"
    }
}function italic() {
    if (text.style.fontStyle == "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic"
    }
}function under(){
    if (text.style.textDecoration == "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underline"
    }
}