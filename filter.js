const data = [
    {
        id: 1,
        name:"watch1",
        img:"./watch_01.jpg",
        cat:"Sport",
        price: 200,
    },

    {
        id: 2,
        name: "watch2",
        img:"./watch_02.jpg",
        cat:"Dress",
        price: 100,
    },

    {
        id: 3,
        name:"watch3",
        img:"./watch_03.jpg",
        cat:"Luxury",
        price: 80,
    },
    {
        id: 4,
        name:"watch4",
        img:"./watch_04.jpg",
        cat:"Dress",
        price: 50,
    },
    {
        id: 5,
        name:"watch5",
        img:"./watch_05.jpg",
        cat:"Casual",
        price: 500,
    },
    {
        id: 6,
        name:"watch6",
        img:"./watch_06.jpg",
        cat:"Casual",
        price: 100,
    },
    {
        id: 7,
        name:"watch7",
        img:"./watch_07.jpg",
        cat:"Dress",
        price: 80,
    },
    {
        id: 8,
        name:"watch8",
        img:"./watch_08.jpg",
        cat:"Dress",
        price: 80,
    },
    {
        id: 4,
        name:"watch3",
        img:"./watch_03.jpg",
        cat:"Luxury",
        price: 120,
    },

]

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const contegoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

// sagala data (product data) screen var disto using map function vaprun (tysathi html type karychi garaj nahiye)

const displayProducts =(filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product => 
    
`    
<div class="product">
<img src= ${product.img}>
<span class="name">${product.name}</span>
<span class="price">${product.price}</span>
</div>

`
      ).join("");
};
    
displayProducts(data)

// input sathi (text serch kela product cha navacha) keyup vaprtat (keyboard interaction)

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    
    if(value){
    displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
    }else{
    displayProducts(data)
    }
    });

// to create multiple Categories(without using html(h1) we cant take manual

    const setCategories = () => {
        const allCats = data.map((item) => item.cat);
        const categories = [
        "All",
        ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
        }),
        ];
        
contegoriesContainer.innerHTML = categories.map(cat=>
`
<span class = "cat">${cat}</span>
`).join("")
 };

// if we select Categories products(filter) will come
// manje dress select kel ki tya realted data yenar

 contegoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    
    selectedCat ==="All"
? displayProducts(data)
: displayProducts(data.filter((item) => item.cat === selectedCat));
});

// priceRange (min-max)tysathi Math method use kara

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

// range kami jast karu shakto (radio button use karun)

    priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
    });
    
    }
    
            
    setCategories();
    setPrices();