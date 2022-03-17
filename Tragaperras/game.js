
let money = parseInt(Math.random(1000 - 200)*1000)
let moneyCounter = document.querySelector(".money");
moneyCounter.innerText = money;

let img=document.querySelectorAll('img');
let index=new Array(3);
let timer=setInterval(changeImg,100);

for(i=0;i<index.length;i++){
    index[i]=parseInt(Math.random()*15);
    img[i].src="img/"+index[i]+".png";
}

function changeImg(){
    for(i=0;i<img.length;i++){
        index[i]++;
        if (index[i]>15) index[i]=0;
        // let player = img[i].animate([
        //     {transform: 'translate(0, -100px)'},
        //     {transform: 'translate(0, 250px)'}
        //   ], 200);
          
        //let player = img[i].animate([{ transform: "translate(0px, 50px)" }], 150);
        img[i].src="img/"+index[i]+".png";
    }
}