let viewAllProductsBtn = document.querySelector(".viewAllProductsBtn")
viewAllProductsBtn.onclick = function () {
    let hiddenProducts = document.querySelector(".hiddenProducts")
    hiddenProducts.classList.toggle("show");
}

// Rest of your JavaScript code...

let cartBtn = document.querySelector(".bi-bag")
 cartBtn.onclick = function(){
    let cart = document.querySelector(".cart")
    cart.classList.toggle("showCart")
}

let array = [];
let i;

let addToCartButtons = document.querySelectorAll('.aTC');
addToCartButtons.forEach(function (button) {
    button.onclick = function () {
        var productContainer = button.parentElement.parentElement;
        let productImage = productContainer.querySelector('img').src;
        let productPriceElement = productContainer.querySelector('.itemPrice');
        let productPriceText = productPriceElement.textContent.replace(/[^\d.]/g, '');
        let productPrice = Number(productPriceText);
        let cart = document.querySelector(".cart");
        let price = document.createElement(`h2`);
        price.setAttribute("class","text-white")
        let itemBox;
        if (array.includes(productImage) === false) {
            let counter = document.createElement(`h1`)
            counter.style.cssText = `color:white;`;
            console.log(counter)
            i = 1;
            itemBox = document.createElement("div");
            itemBox = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", `${productImage}`);
            img.setAttribute("class", `w-25`);
            counter.innerHTML = i;
            itemBox.append(img);
            itemBox.append(counter);
            cart.append(itemBox);
            price.innerHTML=productPrice*i
            console.log(price)
            itemBox.append(price)
            array.push(productImage);
            itemBox.style.cssText = ` display: flex;justify-content: space-between;align-items: center;`;
            let incrementBtn = document.createElement("button");
            incrementBtn.setAttribute("class","btn btn-dark text-white")
            incrementBtn.innerHTML = "+";
            incrementBtn.onclick = function () {
                i = counter.innerHTML
                i++
                price.innerHTML=productPrice*i
                counter.innerHTML=i
                decrementBtn.disabled = false;
                console.log(i)
            };
            itemBox.append(incrementBtn);
            let decrementBtn = document.createElement("button");
            decrementBtn.setAttribute("class","btn btn-dark text-white decrement")
            decrementBtn.innerHTML = "-";
            decrementBtn.onclick = function () {
                i = counter.innerHTML
                i--
                price.innerHTML=productPrice*i
                counter.innerHTML=i
                if(i===1){
                    decrementBtn.disabled = true;

                }

             

            };
            itemBox.append(decrementBtn);
            let clearBtn = document.createElement("button");
            clearBtn.setAttribute("class","btn btn-dark text-white")
            clearBtn.innerHTML = "Clear";
            clearBtn.onclick = function () {
                cart.removeChild(itemBox);
                array.splice(array.indexOf(productImage), 1);
            };
            itemBox.append(clearBtn);
        } else {
            i++;
            itemBox = document.querySelector(`img[src="${productImage}"]`).parentElement;
            counter = itemBox.querySelector("h1");
            price = itemBox.querySelector("h2");
            counter.innerHTML = i;
            price.innerHTML=productPrice*i
        }
    };
});
