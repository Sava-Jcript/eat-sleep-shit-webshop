const url ="https://kea-alt-del.dk/t7/api/products/2221"; 
fetch(url)
.then(res=> res.json())
.then(data=>showProduct(data));

let productdisplayname;
function showProduct(product){

    console.log(product)
    document.querySelector(".breadcrumbs .brand").textContent=product.brandname;
    document.querySelector(".breadcrumbs .productname").textContent=product.productdisplayname;

    document.querySelector("img.image").src =  `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector(".purchaseBox h3").textContent=product.productdisplayname;
    document.querySelector(".purchaseBox p").textContent=product.brandname;

    document.querySelector(".info dd").textContent=product.productdisplayname;

    document.querySelector(".info h1").textContent=product.brandname;

    document.querySelector(".info .colors").textContent=product.basecolour;

    document.querySelector(".info .relidnum").textContent=product.relid;


}