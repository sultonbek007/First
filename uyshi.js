// let a =20.5; 
// let b=10.45; 
// let c=a+b; 
// console.log(c) 
// let ism = prompt("ismingni kirit:"); 
// let yosh= parseFloat(prompt("yoshingni kirit:")); 
// let sinf=prompt("sinfing xarfini kirit");
 
// console.log("sening isming " + ism+ " yoshing "+ yosh+ " da " +" sinfing "+sinf); 
//let a = parseFloat (prompt ("eni")) 
//let b = parseFloat(prompt("boyi")) 
//let c = parseFloat(prompt"kopaytirish")) 
//alert((a+b*c); 
//let d = 5; 
//let e = 10; 
//let f =g+e; 
//console.log(f); 
 
//let a = parseFloat (prompt("aylananing diametri")) 
//let b = parseFloat (prompt("aylaning radiusi")) 
//let c= parseFloat (prompt("aylananing uzunligi")) 
 
let tselsiy = parseFloat(prompt("trelsiy harorat C"));
let F=14; 
let farenggeyt =tselsiy*1.8+F ;
console.log(farenggeyt) 
 
//let tselsiy =parseFloat( prompt("tselsiy harorat C")) 
//let farengeyt = parseFloat (prompt("farengeyt harorat F")) 
//alert(faraengeyt = tselsiy * 1.8 +32)
function math(){
    let son1 = parseFloat(document.getElementById('son1').value);
    console.log(typeof(son1));
    let son2 = parseFloat(document.getElementById('son2').value);
    console.log(typeof(son2));
    let result = son1+son2;
    document.getElementById('h1').innerHTML = result;
   }