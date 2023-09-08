const prev=document.getElementById('prev')
const next=document.getElementById('next')

var count=0;
var list=['photo1.jpeg','photo2.jpeg','photo3.jpeg','photo4.jpeg','photo5.jpeg','photo6.jpeg']
prev.addEventListener('click',() =>{
    count=(count-1+6)%6
    document.getElementById('img').style.backgroundColor=list[count];
})

next.addEventListener('click',() =>{
    count=(count+1+6)%6
    document.getElementById('img').style.backgroundColor=list[count];
})
