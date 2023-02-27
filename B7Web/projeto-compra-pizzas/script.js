let modalQt = 1

const $ = (el) => document.querySelector(el)
const $s = (el) => document.querySelectorAll(el)

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