
fetch("https://kea-alt-del.dk/t7/api/categories")
.then((res)=>res.json())
.then(collectEach); 

function collectEach(data){
data.forEach(showCategory); 

}


function showCategory(oneCategory){




    const template = document.querySelector("template").content; 

    // Clone it 

    const copy = template.cloneNode(true); 


copy.querySelector("a").textContent=oneCategory.category;
copy.querySelector("a").href= `/Users/alimerkouk/Desktop/product/product-list.html?category=${oneCategory.category}`;


    // grab parent
    const parent=document.querySelector("#letter_b ol"); 
// Append

parent.appendChild(copy);


console.log(oneCategory);


}

