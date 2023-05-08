let a = ""
let b = ""
let c = false
let sign=""

function one()
{
    let m=document.getElementById("1").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function two()
{
    let m=document.getElementById("2").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function three()
{
    let m=document.getElementById("3").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function four()
{
    let m=document.getElementById("4").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function five()
{
    let m=document.getElementById("5").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function six()
{
    let m=document.getElementById("6").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function seven()
{
    let m=document.getElementById("7").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function eight()
{
    let m=document.getElementById("8").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function nine()
{
    let m=document.getElementById("9").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}function zero()
{
    let m=document.getElementById("0").innerText;
    if(c===false)
    {
        a=a+m;
    }
    else{
        b=b+m;
    }
    console.log(a)
    console.log(b)
}
function plus()
{
    c=true;
    sign=sign+"plus"
    console.log(sign)
}
function minus()
{
    c=true;
    sign=sign+"minus"
    console.log(sign)
}
function multiply()
{
    c=true;
    sign=sign+"multiply"
    console.log(sign)
}
function divide()
{
    c=true;
    sign=sign+"divide"
    console.log(sign)
}
function equal()
{
    let q=parseInt(a);
    let r=parseInt(b);
    if (sign==="plus")
    {
      let final=q+r;
      let meep=document.getElementById("result").innerText
      meep=meep+" "+final;
      document.getElementById("result").innerText=meep
    }
    if (sign==="minus")
    {
      let final=q-r;
      let meep=document.getElementById("result").innerText
      meep=meep+" "+final;
      document.getElementById("result").innerText=meep
      
    }
    if (sign==="multiply")
    {
      let final=q*r;
      let meep=document.getElementById("result").innerText
      meep=meep+" "+final;
      document.getElementById("result").innerText=meep
    }
    if (sign==="divide")
    {
      let final=q/r;
      let meep=document.getElementById("result").innerText
      meep=meep+" "+final;
      document.getElementById("result").innerText=meep
    }
}
function reset()
{
    final="";
    meep="";
    a="";
    b="";
    sign="";
    c=false;
    document.getElementById("result").innerText="Result:";
}