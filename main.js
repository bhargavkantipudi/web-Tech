function add(a,b){
    a=Number(prompt("Enter a val"))
    b=Number(prompt("Enter a val"))
    console.log(a+b)
    c=a+b
    window.alert("Additoin  =  "+c)
    document.writeln("addtion is ",a+b)
    return c;
}; 
function adds(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    console.log(a,b,c)
    document.getElementById("output").value=c    
}
function calc(){
    a=Number(document.getElementById("a").value)
    b=Number(document.getElementById("b").value)
    op=document.getElementById("op").value
    console.log(document.getElementById("op").value)
    switch (op) {
        case "+":
        document.getElementById("output").value=a+b
            break;
        case "-":
        document.getElementById("output").value=a-b
            break;
        case "*":
        document.getElementById("output").value=a*b
            break;
        case "/":
        document.getElementById("output").value=a/b
            break;
        case "%":
            document.getElementById("output").value=a%b
            break;
        default:
            break;
    }
} 