const posts__wrapper = document.querySelector(".hero__wrapper");
const API__POSTS = "https://dummyjson.com/products";

async function fetchPosts(api) {
    try {
        let response = await fetch(`${api}`);
        let data = await response.json();
        createCard(data.products); // data.products ni o'tkazish
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function createCard(products) {
    products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("card", "card-compact", "bg-base-100", "w-96", "shadow-xl");
        card.innerHTML = `
            <figure>
              <img src="${product.thumbnail}" alt="${product.title}">
            </figure>
            <div class="card-body">
                <h2 class="card-title">${product.title}</h2>
                <p>${product.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-outline btn-success">Buy Now</button>
                </div>
            </div>`;
        posts__wrapper.appendChild(card);
    });
}

fetchPosts(API__POSTS);
