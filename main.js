const productos = [
  {
    id: 1,
    nombre: 'Camiseta Negra',
    precio: 12,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153890/project-landing/shopping_u0outn.webp',
    estrellas: 4,
    colores: ['Negro']
  },
  {
    id: 2,
    nombre: 'Cuadro',
    precio: 35,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154053/project-landing/caballo-ajedrez-negro-01-600x600_rryyy5.jpg',
    estrellas: 5,
    colores: ['Negro', 'Blanco']
  },
  {
    id: 3,
    nombre: 'Piezas Decoración',
    precio: 20,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153970/project-landing/il_794xN.5587074338_hmwr_txl8tv.webp',
    estrellas: 3,
    colores: ['Negro', 'Blanco', 'Amarillo']
  },
  {
    id: 4,
    nombre: 'Taza Jaque Mate',
    precio: 10,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153779/project-landing/VI2-00206-00025_92433_blanco-negro_wwfok7.jpg',
    estrellas: 4,
    colores: ['Blanco']
  },
  {
    id: 5,
    nombre: 'Termo',
    precio: 15,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153688/project-landing/il_794xN.5841412913_c2d9_uaprka.avif',
    estrellas: 5,
    colores: ['Blanco']
  },
  {
    id: 6,
    nombre: 'Libro Historia del Ajedrez',
    precio: 18,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153223/project-landing/md31281392157_ljmbxx.jpg',
    estrellas: 5
  },
  {
    id: 7,
    nombre: 'Manual Iniciación',
    precio: 10,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153348/project-landing/903984-360x480_n1sqlf.jpg',
    estrellas: 5
  },
  {
    id: 8,
    nombre: 'Planillas Notación',
    precio: 8,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153619/project-landing/shopping_zqq8uw.webp',
    estrellas: 3,
    colores: ['Azul']
  },
  {
    id: 9,
    nombre: 'Reloj',
    precio: 22,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153043/project-landing/511ipNsPQ9L._AC_SL1000__imqzv9.jpg',
    estrellas: 4,
    colores: ['Marrón']
  },
  {
    id: 10,
    nombre: 'Tablero Ajedrez',
    precio: 30,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710152944/project-landing/s-l500_sxlgfq.jpg',
    estrellas: 4
  },
  {
    id: 11,
    nombre: 'Piezas de Madera',
    precio: 15,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710152698/project-landing/shopping_vvj4ha.webp',
    estrellas: 3
  },
  {
    id: 12,
    nombre: 'Piezas de Cristal',
    precio: 20,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154139/project-landing/shopping_mbgmke.webp',
    estrellas: 4
  },
  {
    id: 13,
    nombre: 'Tablero Plegable',
    precio: 30,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710154522/project-landing/juego-ajedrez-plegable-de-madera-yo-juegoo_1_stvkbx.jpg',
    estrellas: 4
  },
  {
    id: 14,
    nombre: 'Tablero Electrónico',
    precio: 50,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153096/project-landing/4032153008103_1_tqgprk.jpg',
    estrellas: 4
  },
  {
    id: 15,
    nombre: 'Set de Ajedrez',
    precio: 40,
    img: 'https://res.cloudinary.com/ditkcrwd0/image/upload/v1710153004/project-landing/81chsyBTjIL._AC_SL1500__gsrsoy.jpg',
    estrellas: 4
  }
]

const printProducts = (products) => {
  const divProducts = document.querySelector('#productos')
  divProducts.innerHTML = ''

  for (const zapa of products) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const divEstrellas = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (zapa.estrellas >= i) {
        estrella.classList.add('rellena')
      }
      divEstrellas.appendChild(estrella)
    }

    divZapa.className = 'flex-container'
    divEstrellas.classList.add('estrellas')
    divEstrellas.classList.add('flex-container')
    img.src = zapa.img
    nombre.textContent = zapa.nombre
    precio.textContent = zapa.precio

    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(nombre)
    divZapa.appendChild(precio)
    divZapa.appendChild(divEstrellas)
    divProducts.appendChild(divZapa)
  }
}
printProducts(productos)

document.addEventListener('DOMContentLoaded', function () {
  var azul = document.getElementById('azul')
  var color1 = 'red'
  var color2 = ' rgb(56, 225, 231)'
  var currentColor = color1

  setInterval(function () {
    if (currentColor === color1) {
      azul.style.borderColor = color2
      currentColor = color2
    } else {
      azul.style.borderColor = color1
      currentColor = color1
    }
  }, 1000)
})
