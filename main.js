let shop = document.getElementById("shop");

let shopItemData =[{
    id:"aa",
    name:"scren1",
    price:633,
    desc: "lorem is fake paragraph...!",
    img:"images/photo (1).png"
},{
    id:"ab",
    name:"scren2",
    price:887,
    desc: "lorem is fake paragraph...!",
    img:"images/photo (2).png"
},{
    id:"ac",
    name:"scren3",
    price:100,
    desc: "lorem is fake paragraph...!",
    img:"images/photo (3).png"
},{
    id:"ad",
    name:"scren4",
    price:902,
    desc: "lorem is fake paragraph...!",
    img:"images/photo (4).png"
}];



let generateShop =()=>{
return (shop.innerHTML= shopItemData.map((x)=>{
    let {id, desc, name, price, img} = x;

    return `<div class="item">
<img width="220" src="${img}" alt="">
<div id="product-id-${ id}" class="detail">
    <h3>${name}</h3>
    <p> ${desc}</p>
    <div class="price-quantity ">
        <h3>Rs.${price}/-</h3>
        <div class="button">
        <i onclick="increament(${id})" class="bi bi-plus"></i>
            
            <div id="${id}}" class="quantity">0</div>

        <i onclick="decreament(${id})" class="bi bi-dash"></i>
        </div>
    </div>
</div>
</div>
`}).join(""));

};

generateShop();

let increament = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
};
let decreament = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id);
};
let update     = (id) => {};