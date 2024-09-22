function Addfun(){


    let a= document.getElementById('num_1').value
    let b= document.getElementById('num_2').value
    let result= document.getElementById('para')
    a=parseFloat(a)
    b=parseFloat(b)
    let sum= a+b
    result.innerHTML=sum;
}
function Subfun(){


    let a= document.getElementById('num_1').value
    let b= document.getElementById('num_2').value
    let result= document.getElementById('para')
    a=parseFloat(a)
    b=parseFloat(b)
    let sub= a-b
    result.innerHTML=sub;
}
function Mulfun(){


    let a= document.getElementById('num_1').value
    let b= document.getElementById('num_2').value
    let result= document.getElementById('para')
    a=parseFloat(a)
    b=parseFloat(b)
    let Mul= a*b
    result.innerHTML=Mul;
}
function Divfun(){


    let a= document.getElementById('num_1').value
    let b= document.getElementById('num_2').value
    let result= document.getElementById('para')
    a=parseFloat(a)
    b=parseFloat(b)
    let Div= a/b
    result.innerHTML=Div;
}