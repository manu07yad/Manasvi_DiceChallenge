var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg = "dice"+randomnumber1+".png";
var randomimgsrc = "image/" + randomimg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimgsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg2 = "dice"+randomnumber2+".png";
var randomimgsrc2 = "image/" + randomimg2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimgsrc2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h2").innerHTML="Player 1 wins✨"
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h2").innerHTML="Player 2 wins✨"
}
else
{
    {
        document.querySelector("h2").innerHTML="Draw✨"
    }
}

