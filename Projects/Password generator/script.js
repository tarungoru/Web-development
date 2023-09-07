
document.getElementById('button').addEventListener('click',myfunc)

function myfunc(){
    const input=document.getElementsByTagName('input')[0].value
    const symbols=document.getElementsByTagName('input')[1].checked
    const numbers=document.getElementsByTagName('input')[2].checked

    var small='abcdefghijklmnopqrstuvwxyz';
    var cap='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var special='#@$!*^/+-({[)}=]';
    var number='0123456789'
    if(input==''){
        alert('please enter password length')
    }
    var input2=Number(input);
    var password='';
    if(symbols){
        password+=special[Math.floor(Math.random()*special.length)]
        input2-=1
    }
    if(numbers){
        password+=number[Math.floor(Math.random()*10)]
        input2-=1
    }
    password+=cap[Math.floor(Math.random()*cap.length)]
    input2-=1
    for(i=0;i<input2;i++){
        password+=small[Math.floor(Math.random()*small.length)]

    }

    document.getElementById('demo').textContent=password;
}