function myfun(){
    let a = document.getElementById('fiddu').value
    a= parseInt(a)

   
if(a%2==0){
    document.getElementById('result').innerHTML=a+" is an Even number"
}
else{
     document.getElementById('result').innerHTML=a+" is an Odd number"
}
}
