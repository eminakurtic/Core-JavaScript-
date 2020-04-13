// document.getElementById("dugme")
// document.getElementByClassName("dugme")[0];

$('.dugme').click(function(){
    $('p').css("color", "blue").css({"border":"1px solid black"});
    $('h1').addClass("moj-naslov");
});