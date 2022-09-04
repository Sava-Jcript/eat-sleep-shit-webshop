const url ="https://kea-alt-del.dk/t7/api/products/1163"; 
fetch(url)
.then(res=> res.json())
.then(data=>showproduct(data));
function showproduct(product){

    console.log(product)
}