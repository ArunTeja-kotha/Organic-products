const productcontainer = document.getElementById("displayproducts");


const fetchdata = async (url) => {
    const response  =await fetch(url);
    const data = await response.json();
    displayproducts(data);
    return data;
}
fetchdata('https://dummyjson.com/products');

function displayproducts({products}){
    productcontainer.innerHTML=""
    products.forEach((product) => {
        productcontainer.innerHTML +=generateitemcart(product)
        return
    });
}
function generateitemcart(product)
{
    console.log(product)
    return `
            <div class="product-container">
            <div class="banner">${product.category}</div>
            <div class="image"><img src=${product.images[0]}></div>
            <div class="description">
                <div class="heading">${product.title}</div>
                <div class="matter">${product.description}</div>
            </div>
            <div class="cta">
                <div class="price">$ ${product.price}</div>
                <button>Add to cart</button>
            </div>
            
           </div>
    `
}

const beautyfilter=document.getElementById('beauty-filter')
const fragrancesfilter=document.getElementById('fragrances')
const furniturefilter=document.getElementById('furniture')
const groceriesfilter=document.getElementById('groceries')

beautyfilter.addEventListener('click',async ()=>
{
    const apidata= await fetchdata('https://dummyjson.com/products');
   const data= filterdata('beauty',apidata);
   displayproducts({products:data})
})


fragrancesfilter.addEventListener('click',async ()=>
{
    const apidata= await fetchdata('https://dummyjson.com/products');
   const data= filterdata('fragrances',apidata);
   displayproducts({products:data})
})


furniturefilter.addEventListener('click',async ()=>
{
    const apidata= await fetchdata('https://dummyjson.com/products');
   const data= filterdata('furniture',apidata);
   displayproducts({products:data})
})

groceriesfilter.addEventListener('click',async ()=>
{
    const apidata= await fetchdata('https://dummyjson.com/products');
   const data= filterdata('groceries',apidata);
   displayproducts({products:data})
})





function filterdata(category,data){
    const filtereddata=data.products.filter( (product) =>{
        return product.category == category

    }
   
    )
     return filtereddata;
}



