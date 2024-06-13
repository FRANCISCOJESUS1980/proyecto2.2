import './src/styles/main.scss'

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
    name: 'chiq',
    price: 250,
    stars: 4,
    kilos: 8,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/8592344703683_1.jpg'
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
      'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609001454l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
  },
  {
    name: 'miele',
    price: 650,
    stars: 2,
    kilos: 9,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfqiKyA48YgbB5X5-aPgwdhCaNt5MMJ6vxFFExvvIoJS9HOikgzxpYj7qNq-yJUgWAuc&usqp=CAU'
  },
  {
    name: 'balay',
    price: 260,
    stars: 3,
    kilos: 7,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://media3.bsh-group.com/Product_Shots/1200x675/MCSA00390576_3TS853_def.jpg'
  },
  {
    name: 'hisense',
    price: 190,
    stars: 4,
    kilos: 5,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://www.hisense.es/wp-content/uploads/2022/03/Destacada-WFQY1014EVJM.png'
  },
  {
    name: 'bosch',
    price: 550,
    stars: 5,
    kilos: 10,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202210/27/00104710390594____7__640x640.jpg'
  },
  {
    name: 'aspes',
    price: 150,
    stars: 4,
    kilos: 6,
    seller: 'Superdomesticos Cabrera sl',
    image:
      'https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/164390_00_1.jpg'
  }
]
document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.getElementById('modalContainer')
  const arrowContainer = document.getElementById('arrowContainer')
  let isModalOpen = false

  arrowContainer.addEventListener('click', () => {
    if (!isModalOpen) {
      createModal()

      arrowContainer.classList.remove('hidden')
      isModalOpen = true
    } else (isModalOpen = true) => !createModal()
  })

  function createModal() {
    const modal = document.createElement('div')
    modal.id = 'myModal'
    modal.className = 'modal'

    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'

    const closeModalSpan = document.createElement('span')
    closeModalSpan.className = 'close'
    closeModalSpan.innerHTML = '&times;'
    closeModalSpan.addEventListener('click', () => {
      modal.style.display = 'none'
      isModalOpen = false
    })

    const modalTitle = document.createElement('h2')
    modalTitle.innerText = 'Inicie Su Busqueda'

    const form = document.createElement('form')
    form.id = 'modalForm'

    const inputName = document.createElement('input')
    inputName.type = 'text'
    inputName.placeholder = 'marca'
    inputName.required = true

    const inputEmail = document.createElement('input')
    inputEmail.type = 'text'
    inputEmail.placeholder = 'modelo'
    inputEmail.required = true

    const button1 = document.createElement('button')
    button1.type = 'button'
    button1.innerText = 'Buscar'

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.innerText = 'Reset'

    form.appendChild(inputName)
    form.appendChild(inputEmail)
    form.appendChild(button1)

    form.appendChild(submitButton)

    modalContent.appendChild(closeModalSpan)
    modalContent.appendChild(modalTitle)
    modalContent.appendChild(form)

    modal.appendChild(modalContent)

    modalContainer.appendChild(modal)

    modal.style.display = 'block'

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none'
        isModalOpen = false
      }
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.querySelector('.app')

  productos.forEach((producto) => {
    const productCard = document.createElement('div')
    productCard.className = 'product-card'

    const productImage = document.createElement('img')
    productImage.src = producto.image
    productImage.alt = producto.name

    const productName = document.createElement('h2')
    productName.textContent = producto.name

    const productPrice = document.createElement('p')
    productPrice.textContent = `Precio: $${producto.price}`

    const productStars = document.createElement('p')
    productStars.textContent = `Estrellas: ${producto.stars}`

    const productKilos = document.createElement('p')
    productKilos.textContent = `Kilos: ${producto.kilos}`

    const productSeller = document.createElement('p')
    productSeller.textContent = `Vendedor: ${producto.seller}`

    productCard.appendChild(productImage)
    productCard.appendChild(productName)
    productCard.appendChild(productPrice)
    productCard.appendChild(productStars)
    productCard.appendChild(productKilos)
    productCard.appendChild(productSeller)

    productContainer.appendChild(productCard)
  })
})
