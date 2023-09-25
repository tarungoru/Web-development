

const data=[
    {
    id:1,
    Name:'susan smith',
    role:'Full stack developer',
    img:"https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
},
{
    id:2,
    Name:'stefan smith',
    role:'Front-end engineer',
    img:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
},
{
    id:3,
    Name:'Andrea pichakdo',
    role:'Backend developer',
    img:"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
},
{
    id:4,
    Name:'Kyle jamesion',
    role:'Flutter developer',
    img:"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
},
{
    id:5,
    Name:'Mouse addam',
    role:'Devops engineer',
    img:"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
}
]

const img=document.getElementById('img')
const left=document.getElementById('left')
const right=document.getElementById('right')
const random=document.getElementById('btn')

var x=0;

left.addEventListener('click',()=>{
    x=(x+5-1)%5;

    ans=data[x]
    document.getElementById('img').src=ans.img
    document.getElementById('name').textContent=ans.Name
    document.getElementById('role').textContent=ans.role
    document.getElementById('des').textContent=ans.text
    




})

right.addEventListener('click',()=>{
    x=(x+5+1)%5;

    ans=data[x]
    
    img.src=ans.img
    document.getElementById('name').textContent=ans.Name
    document.getElementById('role').textContent=ans.role
    document.getElementById('des').textContent=ans.text
    
    


})


random.addEventListener('click',()=>{
    ans=data[Math.floor(Math.random()*5)]
    img.src=ans.img
    document.getElementById('name').textContent=ans.Name
    document.getElementById('role').textContent=ans.role
    document.getElementById('des').textContent=ans.text
    


})