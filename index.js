let a=document.getElementById('ip1')
let b=document.getElementById('ip2')
let c=document.getElementById('btn')
let f=document.getElementById('p')
c.addEventListener('click',function(){
    //  d=document.createElement('li')
   let d=b.value-a.value
    f.append(d)
    f.innerHTML=`Balance Amount ${d}`
})