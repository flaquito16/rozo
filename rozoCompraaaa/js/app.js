let products=[
  {
    image:'../sources/DUKE 125.jpg',
    title :'DUKY 125',
    price:'9000000',
    carr:'agregar al carrito',
  },
  // 2
  {
    image:'../sources/DUKE 200.jpg',
    title :'DUKY 200 (GEN 1) 2023',
    price:'14550000',
    carr:'agregar al carrito',
  },
  // 3
  {
    image:'../sources/duke-200.jpg',
    title :'DUKY 200 2023',
    price:'14990000',
    carr:'agregar al carrito',
  },

      // 4
  {
    image:'../sources/DUK_200_NGG.jpg',
    title :'DUKY 200 NG 2024',
    price:'17590000',
    carr:'agregar al carrito',
  },
    // 5
    {
      image:'../sources/390_NG.jpg',
      title :'DUKY 390 NG 2023',
      price:'24990000',
      carr:'agregar al carrito',
    },
      // 6
  {
    image:'../sources/390_NG.jpg',
    title :'DUKY 390 NG 2024',
    price:'29990000',
    carr:'agregar al carrito',
  },
    // 7
    {
      image:'../sources/890-duk.jpg',
      title :'DUKY 890 2023',
      price:'59990000',
      carr:'agregar al carrito',
    },
      // 8
  {
    image:'../sources/890-duke-gp.jpg',
    title :'DUKY 890 GP 2023',
    price:'62990000',
    carr:'agregar al carrito',
  },
    // 9
    {
      image:'../sources/890_R.png',
      title :'DUKY 890 R 2023',
      price:'68990000',
      carr:'agregar al carrito',
    },
    // 10
    {
      image:'../sources/super_duke.jpg',
      title :'HYPER DUKY 1290 R 2023',
      price:'117000000',
      carr:'agregar al carrito',
    },
      // 11
  {
    image:'../sources/super_duke.jpg',
    title :'HYPER DUKY 1290 R EVO 2023',
    price:'128000000',
    carr:'agregar al carrito',
  },
  {
    title :'ybre',
    image: '/sources/ybrz.png',
    price: '$5.000.000',
    carr:'agregar al carrito',
  },
  {
    title :'ss',
    image: '/sources/sz.png',
    price: '$8.000.000',
    carr:'agregar al carrito',
  },
  {
    title :'fz',
    image: '/sources/fz 1.5.png',
    price: '$10.000.000',
    carr:'agregar al carrito',
  },
  {
    title :'frz',
    image: '/sources/fz 250.png',
    price: '$15.000.000',
    carr:'agregar al carrito',
  },
  {
    title :'mr 15',
    image: '/sources/mt15.png',
    price: '$16.000.000',
    carr:'agregar al carrito'
    
  },
  {
    title :'mr 03',
    image: '/sources/mt 03.png',
    price: '$32.000.000',
    carr:'agregar al carrito'
  },
  {
    title :'mr 07',
    image: '/sources/mt 07.png',
    price: '$54.000.000',
    carr:'agregar al carrito'
  },
  {
    title :'mr 09',
    image: '/sources/mt 09.png',
    price: '$69.000.000',
    carr:'agregar al carrito'
  },
  {
    title :'mr 10',
    image: '/sources/mt 10.png',
    price: '$95.000.000',
    carr:'agregar al carrito'
  },
  {
    title :'adventure GT',
    image: '/sources/tracer.png',
    price: '$95.000.000'
    ,carr:'agregar al carrito'
  },
  {
    title :'RR 15',
    image: '/sources/r15.jpg',
    price: '$95.000.000'
    ,carr:'agregar al carrito'
  },
  {
    title :'RR 7',
    image: '/sources/r7.jpg',
    price: '$95.000.000'
    ,carr:'agregar al carrito'
  },
  {
    title :'RR 1',
    image: '/sources/r1.jpg',
    price: '$95.000.000'
    ,carr:'agregar al carrito'
  },
];
////-----------------------------------------

const container = document.getElementById('div1')
const selectProducts =document.querySelector('#select-products')
////-----------------------------------------
btnCreate = document.getElementById('btn-create');
let imgSelected = "";
let idProduct = 0;

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');

const filterXPrice = document.getElementById('filterXPrice');

btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);
closeModal.addEventListener('click',()=>modal.style.display ='none');

filterXPrice.addEventListener('change', filterProducts);
function filterProducts(event) {
  const responseFilter = event.target.value === 'menor que 10 millones'
  ? products.filter(moto => moto.price < 10000000)
   : event.target.value === 'Entre 10 y 40 millones'
   ? products.filter(moto => moto.price >= 10000000 && moto.price <= 40000000)
   : event.target.value === 'mayor a 40 millones'
   ? products.filter(moto => moto.price > 40000000)
   : event.target.value === 'Todos los Pruductos'
   ? products.filter(moto => moto.price > 100)
  :null;
  container.innerHTML='';
  responseFilter.map(moto => addCard(moto))
}



function importImg(event) {
  const currentImg = event.target.files[0];
  const objetURL =URL.createObjectURL(currentImg);
  imgSelected = objetURL;
}

function createNewProduct() {
  idProduct++;
  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  // const id = idProduct;

  let newMoto ={ title:titleProduct, price:priceProduct, image:imgSelected, carr:'agregar al carrito',};


  products.push(newMoto);

 modal.style.display ='none';
 addCard(newMoto)
 save();
 console.log(save());
}
function renderCards() {
  moto.map( moto => { moto.product === selectProducts.value ? addCard(fruit) : null } );
}
//-------------------------------------------------------
//   const imgCard = document.createElement('img')
//   imgCard.src = imgSelected.image
//   imgCard.alt = imgSelected.title


//   const div2 = document.createElement('div')
//   div2.classList.add('info-product')

//   const title = document.createElement("h2")
//   title.textContent= newNewMoto.title
//   title.classList.add('title')

//   const price = document.createElement('p')
//   price.textContent= '$'+newNewMoto.price
//   price.classList.add('price')

//   const carr = document.createElement('button')
//   carr.textContent= 'agregar al carrito';
//   carr.classList.add('btn-car')


//   card.appendChild(imgCard)
//   card.appendChild(div2)
//   div2.appendChild(title)
//   div2.appendChild(price)
//   div2.appendChild(carr)

// // card.innerHTML= container.title +" "+ container.price +" "+ container.image+" " + container.carr ;
//   container.appendChild(card)
//  });
// }

 function showModal() {
  modal.style.display ='flex';
 }


////---------------------------------------------



function addCard(product) {
  
  const card = document.createElement('div')
  card.classList.add('item')

  const imgCard = document.createElement('img')
  imgCard.src = product.image
  imgCard.alt = product.title


  const div2 = document.createElement('div')
  div2.classList.add('info-product')

  const title = document.createElement("h2")
  title.textContent= product.title
  title.classList.add('title')

  const price = document.createElement('p')
  price.textContent= '$'+product.price
  price.classList.add('price')

  const carr = document.createElement('button')
  carr.textContent= product.carr
  carr.classList.add('btn-car')


  card.appendChild(imgCard)
  card.appendChild(div2)
  div2.appendChild(title)
  div2.appendChild(price)
  div2.appendChild(carr)


  container.appendChild(card)
}

window.addEventListener('DOMContentLoaded', () => {
  products.forEach( element => addCard(element) )
  save();
  console.log(save());
})

// Funcionalidades carritos
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productsList = document.querySelector('.div1');



let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e=> {
if (e.target.classList.contains('btn-car'))  {
    const product = e.target.parentElement;

    const infoProduct = {
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('p').textContent,
    }

    const exits = allProducts.some(
     product => product.title === infoProduct.title
    );

    if (exits) {
      const updateProducts = allProducts.map(product =>{
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
          
        }else{
          return product;
        }
      });
      allProducts=[...updateProducts]
    } else{
      allProducts = [...allProducts, infoProduct]

    }
    showHTML();
}

});

rowProduct.addEventListener('click', e=>{
  if (e.target.classList.contains('icon-close')){
    const product= e.target.parentElement;
    const title= product.querySelector('p').textContent;

    allProducts=allProducts.filter(
      product => product.title !== title
   );
    console.log(allProducts);
    showHTML();
  }
});

const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
    <div class="info-cart-product">
    <span class="cantidad-producto-carrito">${product.quantity}</span>
    <p class="titulo-producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
</div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon-close"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
    />
</svg>
        `;

		rowProduct.append(containerProduct);

		total = 
     total + parseFloat(product.quantity * parseFloat(product.price.slice(1)));
		totalOfProducts = totalOfProducts + product.quantity;
console.log(total);
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  console.log( `$${total}`);

};
  

function save() {
  localStorage.setItem("card", JSON.stringify(products))
}
loading();
function loading(){
  products= JSON.parse(localStorage.getItem("card"))
  products.forEach(product => console.log(product));
}