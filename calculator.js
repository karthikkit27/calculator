function add()
{ 
    var inp1=parseInt(document.getElementById("input1").value)
    var inp2=parseInt(document.getElementById("input2").value)
    var otp1=inp1+inp2
    document.getElementById("output").innerHTML=otp1 
}

function sub()
{
    var inp1=parseInt(document.getElementById("input1").value)
    var inp2=parseInt(document.getElementById("input2").value)
    var otp2=inp1-inp2
    document.getElementById("output").innerHTML=otp2
}

function mul()
{
    var inp1=parseInt(document.getElementById("input1").value)
    var inp2=parseInt(document.getElementById("input2").value)
    var otp3=inp1*inp2
    document.getElementById("output").innerHTML=otp3
}

function div()
{
    var inp1=parseInt(document.getElementById("input1").value)
    var inp2=parseInt(document.getElementById("input2").value)
    var otp4=inp1/inp2
    document.getElementById("output").innerHTML=otp4
}

function resetVal()
{
    var inp1=parseInt((document.getElementById("input1").value=''))
    var inp2=parseInt((document.getElementById("input2").value=''))
    document.getElementById("output").innerHTML=00
}

