// var divs= document.querySelector(".div1")
// divs.addEventListener("click",desc)
// function desc(e){
//  e.preventDefault()
//       // window.location.href="demo.html"
//       var arrprice=[]
//       var price=document.getElementsByClassName("spn")
//       for(var i=0; i<price.length; i++){
//       //     var x=price[i].parentElement.parentElement.parentElement.parentElement;
//       //     console.log(x)
//             var selected=document.querySelector("#sort").value;
//       arrprice.sort(function(a,b){
//             if(selected="low"){
//                   return a-b;
//             }
//             else{
//                   return b-a;
//             }
           
//       })
//             arrprice.push(price[i].parentElement.parentElement.parentElement.parentElement)
//       }
// displayprod(arrprice)
// }

// // var price= document.querySelector("#priceid")
// // console.log(price) 
// function displayprod(arr){
//       arr=[]
//       var x=document.getElementsByClassName("div1")
//       for(var i=0; i<x.length; i++){
//             arr.push(x[i])      
//       }
//       return arr
// }

document.querySelector(".div1").addEventListener("click",desc)
function desc(){
      window.location.href="jw_marriott_hotel.html"
}