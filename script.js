import fetchData from "./data.js";

const data = await fetchData();

const page = "https://halva1988.github.io/Van-Gogh-test";

const wrapperMain = document.querySelector(".wrapper__main");
const titleMain = document.createElement("h1");
titleMain.classList.add("main__title");
titleMain.textContent = "Результаты поиска"
wrapperMain.appendChild(titleMain);
const container = document.createElement("section");
container.classList.add("container");
wrapperMain.appendChild(container);

const from = document.querySelector(".header__search__form");
const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");

data.forEach((element) => {
	const item = document.createElement("div");
  const itemContainerImg = document.createElement("div");
	const itemPriceDiv = document.createElement("div");
	const itemImg = document.createElement("img");
	const itemTitle = document.createElement("h2");
	const itemPrice = document.createElement("p");
	const itemPromoPrice = document.createElement("p");
	const itemButton = document.createElement("button");
  const itemButtonDiv = document.createElement("div");

	itemPriceDiv.classList.add("itemPriceContainer");

  itemContainerImg.classList.add("itemContainerImg");
  itemButtonDiv.classList.add("buttonDiv")
	item.setAttribute("data-promo", element.promo);

  itemButtonDiv.appendChild(itemButton);
	itemButton.classList.add("card__button");
	itemButton.textContent = "Подробнее";
	itemContainerImg.appendChild(itemImg);
	itemContainerImg.appendChild(itemButtonDiv);
  
	item.classList.add("card");
	itemImg.classList.add("card__img");
	itemTitle.classList.add("card__title");
	itemPrice.classList.add("card__price");


	if (element.promo) {
		const itemPromo = document.createElement("span");
    itemPromo.classList.add("card__promo-visible")
		itemPromo.textContent = "Акция";
		itemPromoPrice.classList.add("card__promo-price");
		itemPrice.classList.add("card__title-promo");
		item.appendChild(itemPromo);
		item.appendChild(itemPromoPrice);
		itemPromoPrice.textContent = `${element.promoPrice} ₽`;
		itemPriceDiv.appendChild(itemPromoPrice);
	}

	itemPriceDiv.appendChild(itemPrice);

	item.appendChild(itemTitle);
	item.appendChild(itemPriceDiv);
	item.appendChild(itemContainerImg);
	itemImg.src = `${page}/assets/${element.url}`;
	itemTitle.textContent = element.title;
	itemPrice.textContent = `${element.price} ₽`;

	container.appendChild(item);
});


const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
	const buttonDiv = card.querySelector(".buttonDiv");

	card.addEventListener("mouseover", () => {
		buttonDiv.style.opacity = "1";
	});

	card.addEventListener("mouseout", () => {
		buttonDiv.style.opacity = "0";
	});
});

from.addEventListener("submit", (e) => {
	e.preventDefault();
})

searchButton.addEventListener("click", () => {
	searchInput.classList.toggle("active");
	searchInput.value = '';
	searchInput.focus();
});