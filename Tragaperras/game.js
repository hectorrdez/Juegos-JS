let timer=setInterval(rotateImg(),100);
let img=document.querySelectorAll('img');
let index=new Array(3);

for(i=0;i<index.length;i++){
    index[i]=parseInt(Math.random()*15);
    img[i].src="img/"+index[i]+".jpg";
}


function rotateImg(){
    for(i=0;i<img.length;i++){
        index[i]++;
        img[i].src="img/"+index[i]+".jpg";
    }
}