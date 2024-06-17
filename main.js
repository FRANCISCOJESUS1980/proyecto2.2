import './src/styles/main.scss'

import { initializeThemeToggle } from './modooscuro'

document.addEventListener('DOMContentLoaded', (event) => {
  initializeThemeToggle()
})

const productos = [
  {
    name: 'bolero',
    price: 450,
    stars: 4,
    kilos: 12,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://media.cecotec.cloud/02376/bolero-dresscode-121000-steel_4j2pdd_2.png:md'
  },
  {
    name: 'infiniton',
    price: 280,
    stars: 3,
    kilos: 6,
    seller: 'Superdomesticos Cabrera sl',
    image: 'https://infiniton.es/3984-large_default/wm-a62b.jpg'
  },
  {
    name: 'AEG',
    price: 250,
    stars: 4,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://4.bp.blogspot.com/-iJl3oqdoXDA/V-zL5S9Wr0I/AAAAAAAAIAE/_AHQPsa6uGAbt6dCjgnLzKPZhNWNJgghQCLcB/s1600/aeg-l7fee841-opinion.png'
  },
  {
    name: 'siemens',
    price: 350,
    stars: 5,
    kilos: 10,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://cdnebasnet.com/data/eshop/funnatic/images/products/i/1/3/6/9/0/p13690/0000-17905736-wg44g20xes-stp-def.webp?1667487120'
  },
  {
    name: 'samsung',
    price: 750,
    stars: 3,
    kilos: 12,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://anjanaenterprises.com/wp-content/uploads/2021/07/Washing-Machine.png'
  },
  {
    name: 'miele',
    price: 650,
    stars: 2,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://pngimg.com/uploads/washing_machine/washing_machine_PNG15588.png'
  },
  {
    name: 'balay',
    price: 260,
    stars: 3,
    kilos: 7,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://th.bing.com/th/id/R.55208f4b442be23c5d7811b622db7f3d?rik=usp77qz7clCzCw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwashing_machine%2fwashing_machine_PNG15570.png&ehk=dk41eTyRsBhNj24mVaOZhdsbi5%2fpjDThb4fTLwoSJfY%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    name: 'balay',
    price: 560,
    stars: 5,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/25026-thickbox_default/lavadora-balay-3ti985b.jpg'
  },
  {
    name: 'balay',
    price: 360,
    stars: 4,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/37877-thickbox_default/lavadora-balay-3ts993bt.jpg'
  },
  {
    name: 'Candy',
    price: 190,
    stars: 4,
    kilos: 5,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://th.bing.com/th/id/R.339d308c6e100ab6bef8e5fb0b6c9f2a?rik=cNre3mCWEufweQ&riu=http%3a%2f%2fwww.candysmarttouch.com%2fimages%2fgrandovita_model.png&ehk=BWYMU%2bN1XyrtlqpGsIKbaUThesfZd%2beDvmTp%2fq2jer4%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    name: 'bosch',
    price: 550,
    stars: 5,
    kilos: 10,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/46721-thickbox_default/lavadora-bosch-wau28phses.jpg'
  },
  {
    name: 'bosch',
    price: 750,
    stars: 4,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/46718-thickbox_default/lavadora-bosch-wax28eh0es.jpg'
  },
  {
    name: 'bosch',
    price: 510,
    stars: 3,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/47221-thickbox_default/lavadora-bosch-wgg244fxes.jpg'
  },
  {
    name: 'aspes',
    price: 150,
    stars: 4,
    kilos: 6,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://pngimg.com/uploads/washing_machine/washing_machine_PNG15581.png'
  },
  {
    name: 'Miele',
    price: 290,
    stars: 4,
    kilos: 7,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://media.miele.com/images/2000012/200001297/20000129787.png?d=1400&impolicy=z-boxed'
  },
  {
    name: 'whirlpool',
    price: 350,
    stars: 4,
    kilos: 7,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://refrilavadoras.com/refrilavadoras/prorefri/sub_carpeta/2020-05-21-11-05-33.png'
  },
  {
    name: 'Whirlpool',
    price: 290,
    stars: 4,
    kilos: 7,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/whirlpool/en-us/marketing-content/site-assets/page-content/landing-pages/laundry/washers/washer-limbo-02.png?fit=constrain&fmt=png-alpha&wid=2875'
  },
  {
    name: 'AEG',
    price: 890,
    stars: 3,
    kilos: 11,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSAAWM190PA0005F.png?width=250&quality=70&mode=crop'
  },
  {
    name: 'AEG',
    price: 790,
    stars: 5,
    kilos: 12,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://europaelectrodomesticos.com/49822-thickbox_default/lavadora-aeg-lfr7394v4b.jpg'
  },
  {
    name: 'AEG',
    price: 590,
    stars: 3,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image: 'https://pb.com.bo/wp-content/uploads/2023/10/Lavadora-HT9.png'
  },
  {
    name: 'AEG',
    price: 690,
    stars: 5,
    kilos: 10,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://services.electrolux-medialibrary.com/118ed4c0ee6546f4a7684c7fef8c985aNrZmYkM861d1f/view/WS_ZO/PSAAWM190PA0005F.png?width=250&quality=70&mode=crop'
  },
  {
    name: 'Fagor',
    price: 185,
    stars: 3,
    kilos: 5,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://storage.beko.co.uk/blomberg2018products/large/7149442300_LO2_20200429_145330.png'
  },
  {
    name: 'Hisense',
    price: 260,
    stars: 1,
    kilos: 6,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://i.pinimg.com/originals/1c/8d/b6/1c8db6aa616321cae07a5c01865d57e0.png'
  },
  {
    name: 'Fagor',
    price: 790,
    stars: 5,
    kilos: 11,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://opl-ltd.co.uk/wp-content/uploads/2022/06/Fagor-High-Spin-WM-LA45-1024x1024.png'
  },
  {
    name: 'Infiniton',
    price: 450,
    stars: 4,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://pedidos.ideahogar.es/images/product/blanca/lavadoras/lavadora-carga-frontal/infiniton/01lavinf92321.jpg'
  },
  {
    name: 'Teka',
    price: 590,
    stars: 3,
    kilos: 6,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://th.bing.com/th/id/R.fe30af24fb26e701a35ea0f04d626341?rik=T0Nr0jTWvMNIyg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwashing_machine%2fwashing_machine_PNG15602.png&ehk=l%2bBh044caL1%2fCieqIgJlLnWRXTzGsasgOJP0p%2fxGyN0%3d&risl=1&pid=ImgRaw&r=0'
  },
  {
    name: 'Hisense',
    price: 290,
    stars: 2,
    kilos: 5,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://i.pinimg.com/originals/1c/8d/b6/1c8db6aa616321cae07a5c01865d57e0.png'
  },
  {
    name: 'Beko',
    price: 690,
    stars: 4,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://stocksfuera.es/wp-content/uploads/2020/09/7145646100-LO2-20200603-091541.png'
  },
  {
    name: 'Haier',
    price: 390,
    stars: 4,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://pngimg.com/uploads/washing_machine/washing_machine_PNG15588.png'
  },
  {
    name: 'Bosch',
    price: 490,
    stars: 5,
    kilos: 10,
    seller: 'Superdomesticos Cabrera sl',
    image: 'https://www.sonimagen.es/img/c/187.jpg'
  }
]
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modalContainer')
  const arrowContainer = document.getElementById('arrowContainer')
  let isModalOpen = false

  arrowContainer.addEventListener('click', () => {
    toggleModal()
  })

  function toggleModal() {
    if (isModalOpen) {
      closeModal()
    } else {
      openModal()
    }
  }

  function openModal() {
    if (!document.getElementById('myModal')) {
      createModal()
    }
    document.getElementById('myModal').style.display = 'block'
    isModalOpen = true
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none'
    isModalOpen = false
  }

  function createModal() {
    if (document.getElementById('myModal')) return

    const modal = document.createElement('div')
    modal.id = 'myModal'
    modal.className = 'modal'

    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'

    const closeModalSpan = document.createElement('span')
    closeModalSpan.className = 'close'
    closeModalSpan.innerHTML = '&times;'
    closeModalSpan.addEventListener('click', () => {
      closeModal()
    })

    const modalTitle = document.createElement('h2')
    modalTitle.innerText = 'Inicie Su Busqueda'

    const form = document.createElement('form')
    form.id = 'modalForm'

    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.placeholder = 'marca'
    inputName.required = true

    const inputKilos = document.createElement('input')
    inputKilos.type = 'number'
    inputKilos.placeholder = 'kilos'
    inputKilos.required = true
    inputKilos.min = 5
    inputKilos.max = 12

    const buttonSearch = document.createElement('button')
    buttonSearch.type = 'button'
    buttonSearch.innerText = 'Buscar'
    buttonSearch.addEventListener('click', () => {
      console.log('Buscar button clicked')
      closeModal()
      const filteredProducts = filterProducts(inputName.value, inputKilos.value)
      console.log('Filtered Products:', filteredProducts)
      if (filteredProducts.length === 0) {
        console.log('No products found, displaying suggested products')
        displaySuggestedProducts()
      } else {
        displayProducts(filteredProducts)
      }
    })

    const buttonReset = document.createElement('button')
    buttonReset.type = 'button'
    buttonReset.innerText = 'Reset'
    buttonReset.addEventListener('click', () => {
      inputName.value = ''
      inputKilos.value = ''
      closeModal()
      displayProducts(productos)
    })

    form.appendChild(inputName)
    form.appendChild(inputKilos)
    form.appendChild(buttonSearch)
    form.appendChild(buttonReset)

    modalContent.appendChild(closeModalSpan)
    modalContent.appendChild(modalTitle)
    modalContent.appendChild(form)

    modal.appendChild(modalContent)
    modalContainer.appendChild(modal)
  }

  function filterProducts(name, kilos) {
    return productos.filter(
      (product) =>
        (!name || product.name.toLowerCase().includes(name.toLowerCase())) &&
        (!kilos || product.kilos == kilos)
    )
  }

  function displayProducts(products) {
    const productContainer = document.querySelector('.app')
    productContainer.innerHTML = ''

    products.forEach((product) => {
      const productCard = document.createElement('div')
      productCard.className = 'product-card'

      const productImage = document.createElement('img')
      productImage.src = product.image
      productImage.alt = product.name

      const productName = document.createElement('h2')
      productName.textContent = product.name

      const productPrice = document.createElement('p')
      productPrice.textContent = `Precio: $${product.price}`

      const productStars = document.createElement('p')
      productStars.textContent = `Estrellas: ${product.stars}`

      const productKilos = document.createElement('p')
      productKilos.textContent = `Kilos: ${product.kilos}`

      const productSeller = document.createElement('p')
      productSeller.textContent = `Vendedor: ${product.seller}`

      productCard.appendChild(productImage)
      productCard.appendChild(productName)
      productCard.appendChild(productPrice)
      productCard.appendChild(productStars)
      productCard.appendChild(productKilos)
      productCard.appendChild(productSeller)

      productContainer.appendChild(productCard)
    })
  }

  function displaySuggestedProducts() {
    console.log('Displaying suggested products')
    const productContainer = document.querySelector('.app')
    productContainer.innerHTML = '<h2>Productos sugeridos</h2>'

    const suggestedProducts = []
    while (suggestedProducts.length < 3) {
      const randomIndex = Math.floor(Math.random() * productos.length)
      if (!suggestedProducts.includes(productos[randomIndex])) {
        suggestedProducts.push(productos[randomIndex])
      }
    }

    suggestedProducts.forEach((product) => {
      const productCard = document.createElement('div')
      productCard.className = 'product-card'

      const productImage = document.createElement('img')
      productImage.src = product.image
      productImage.alt = product.name

      const productName = document.createElement('h2')
      productName.textContent = product.name

      const productPrice = document.createElement('p')
      productPrice.textContent = `Precio: $${product.price}`

      const productStars = document.createElement('p')
      productStars.textContent = `Estrellas: ${product.stars}`

      const productKilos = document.createElement('p')
      productKilos.textContent = `Kilos: ${product.kilos}`

      const productSeller = document.createElement('p')
      productSeller.textContent = `Vendedor: ${product.seller}`

      productCard.appendChild(productImage)
      productCard.appendChild(productName)
      productCard.appendChild(productPrice)
      productCard.appendChild(productStars)
      productCard.appendChild(productKilos)
      productCard.appendChild(productSeller)

      productContainer.appendChild(productCard)
    })
  }

  displayProducts(productos)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

const inicioButton = document.querySelector('footer button')
inicioButton.addEventListener('click', scrollToTop)
const footerButton = document.querySelector('header button:nth-child(2)')
footerButton.addEventListener('click', scrollToBottom)

const transformButton = document.querySelector('#senior')
let isTransformed = false

transformButton.addEventListener('click', () => {
  isTransformed = !isTransformed
  transformButton.textContent = isTransformed ? 'Achicar' : 'Agrandar'

  document.body.classList.toggle('transformed', isTransformed)

  const productCards = document.querySelectorAll('.product-card')
  productCards.forEach((card) => {
    card.classList.toggle('transformed', isTransformed)
  })
})
