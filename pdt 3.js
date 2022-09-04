const url= "https://kea-alt-del.dk/t7/api/products"; 

fetch(url)
.then (function(res){
    return res.json(); 
})

.then (function(data){
    hanldeProductlist(data); 
})

function hanldeProductlist(data){


data.forEach(showProduct);
}


function showProduct(product){
     
//  grab tempalte

    const template = document.querySelector("#smallProductTemplate").content; 

    // Clone it 

    const copy = template.cloneNode(true); 

    // grab parent
    const parent=document.querySelector("main"); 
// Append

parent.appendChild(copy);

console.log(product);
}
