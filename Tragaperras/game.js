
let img=document.querySelectorAll('img');
let index=new Array(3);
let timer=setInterval(rotateImg,100);

for(i=0;i<index.length;i++){
    index[i]=parseInt(Math.random()*15);
    img[i].src="img/"+index[i]+".png";
}

function rotateImg(){
    for(i=0;i<img.length;i++){
        index[i]++;
        if (index[i]>15) index[i]=0;
        let player = img[i].animate([{ transform: "translate(0px, 50px)" }], 100);
        img[i].src="img/"+index[i]+".png";
    }
}