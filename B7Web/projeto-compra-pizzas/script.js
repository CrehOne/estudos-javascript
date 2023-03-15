let cart = []
let modalQt = 1
let modalKey = 0

const $ = (el) => document.querySelector(el)
const $s = (el) => document.querySelectorAll(el)

//Listagem das pizzas
pizzaJson.map((item, index) =>  {
    let pizzaItem = $('.models .pizza-item').cloneNode(true)

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()

        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQt = 1
        modalKey = key

        $('.pizzaBig img').src = pizzaJson[key].img
        $('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        $('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        $('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        $('.pizzaInfo--size.selected').classList.remove('selected')
        $s('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if (sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        $('.pizzaInfo--qt').innerHTML = modalQt

        $('.pizzaWindowArea').style.opacity = 0
        $('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
            $('.pizzaWindowArea').style.opacity = 1
        }, 200)
    })

    $('.pizza-area').append(pizzaItem)
})

// Eventos do MODAL
function closeModal() {
    $('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        $('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

$s(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach((item) => {
    item.addEventListener('click', closeModal)
})

$('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalQt > 1){
        modalQt--
        $('.pizzaInfo--qt').innerHTML = modalQt
    }
})

$('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++
    $('.pizzaInfo--qt').innerHTML = modalQt
})

$s('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', (e) => {
        $('.pizzaInfo--size.selected').classList.remove('selected')
        size.classList.add('selected')
    })
})

$('.pizzaInfo--addButton').addEventListener('click', () => {
    let size = parseInt($('.pizzaInfo--size.selected').getAttribute('data-key'))
    let identifier = pizzaJson[modalKey].id + '@' + size
    let key = cart.findIndex((item) => item.identifier == identifier)

    if(key > -1) {
        cart[key].qt += modalQt
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        })
    }
    updateCart()
    closeModal()
})

$('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        $('aside').style.left = '0'
    }    
})

$('.menu-closer').addEventListener('click', () => {
    $('aside').style.left = '100vw'
})

function updateCart() {
    $('.menu-openner span').innerHTML = cart.length

    if (cart.length > 0) {
        $('aside').classList.add('show')
        $('.cart').innerHTML = ''

        let subtotal = 0
        let desconto = 0
        let total = 0

        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[i].id)
            subtotal += pizzaItem.price * cart[i].qt

            let cartItem = $('.models .cart--item').cloneNode(true)
            let pizzaSizeName
            switch (cart[i].size) {
                case 0:
                    pizzaSizeName = 'P'
                    break
                case 1:
                    pizzaSizeName = 'M'
                    break
                case 2:
                    pizzaSizeName = 'G'
                    break
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`

            cartItem.querySelector('img').src = pizzaItem.img
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
                if (cart[i].qt > 1) {
                    cart[i].qt--
                } else {
                    cart.splice(i, 1)
                }
                updateCart()
            })
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
                cart[i].qt++
                updateCart()
            })

            $('.cart').append(cartItem)
        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        $('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`
        $('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`
        $('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`

    } else {
        $('aside').classList.remove('show')
        $('aside').style.left = '100vw'
    }
}