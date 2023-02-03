const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

// 展示商品
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) =>
        `
    <div class="product">
    <img
        src=${product.img}
        alt=""
    />
    <span class="prodName">${product.name}</span>
    <span class="prodPrice">$${product.price}</span>
    </div>
    `
    )
    .join("");
};

displayProducts(data);

// 使用按键事件监听器
searchInput.addEventListener("keyup", (e) => {
  // 转换成小写防止搜索出问题
  const value = e.target.value.toLowerCase();
  // 如果搜索框中的数据不为空则检索，否则还原为展示所有商品状态
  if (value) {
    // indexOf(value) !== -1 表示 value在data中
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat); // 根据data对象数组获取所有种类
  const categories = [
    "All", // 使用 ...进行拼接添加"All"到数组第一个
    ...allCats.filter((item, i) => {
      // 使用filter过滤掉重复种类
      return allCats.indexOf(item) === i;
    }),
  ];
  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `
    <span class="category">${cat}</span>
    `
    )
    .join("");
};

setCategories();
