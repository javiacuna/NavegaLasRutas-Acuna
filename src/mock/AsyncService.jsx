const products = [
  {
    "id": '1',
    "brand": "Samsung",
    "name": "Samsung Galaxy S23 Ultra",
    "peso": 234,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 1399.99,
    "precioBulto": 1399.99,
    "stock": 15,
    "oferta": true,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://http2.mlstatic.com/D_NQ_NP_992349-MLA73149152709_112023-O.webp"
  },
  {
    "id": '2',
    "brand": "Samsung",
    "name": "Samsung Galaxy A54",
    "peso": 202,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 449.99,
    "precioBulto": 449.99,
    "stock": 30,
    "oferta": false,
    "nuevo": false,
    "categoria": "Celulares",
    "img": "https://cdn.movertix.com/media/catalog/product/s/a/samsung-galaxy-a54-5g-dual-sim-awesome-black-256gb-and-8gb-ram-sm-a546b-ds_1.jpg"
  },
  {
    "id": '3',
    "brand": "Samsung",
    "name": "Samsung Galaxy Z Flip 5",
    "peso": 187,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 999.99,
    "precioBulto": 999.99,
    "stock": 10,
    "oferta": true,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip5-5g-r1.jpg"
  },
  {
    "id": '4',
    "brand": "Apple",
    "name": "iPhone 15 Pro Max",
    "peso": 221,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 1599.00,
    "precioBulto": 1599.00,
    "stock": 8,
    "oferta": false,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525491_sd.jpg"
  },
  {
    "id": '5',
    "brand": "Apple",
    "name": "iPhone 14",
    "peso": 172,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 899.00,
    "precioBulto": 899.00,
    "stock": 20,
    "oferta": false,
    "nuevo": false,
    "categoria": "Celulares",
    "img": "https://cdn.movertix.com/media/catalog/product/i/p/iphone-14-midnight-256gb_2.jpg"
  },
  {
    "id": '6',
    "brand": "Apple",
    "name": "iPhone SE (2022)",
    "peso": 144,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 429.00,
    "precioBulto": 429.00,
    "stock": 25,
    "oferta": true,
    "nuevo": false,
    "categoria": "Celulares",
    "img": "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_iphone_se_2022.jpg"
  },
  {
    "id": '7',
    "brand": "Xiaomi",
    "name": "Xiaomi Redmi Note 13 Pro",
    "peso": 204,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 349.99,
    "precioBulto": 349.99,
    "stock": 50,
    "oferta": true,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://www.powerplanetonline.com/cdnassets/xiaomi_redmi_note_13_pro_4g_lila_01_l.jpg"
  },
  {
    "id": '8',
    "brand": "Xiaomi",
    "name": "Xiaomi 13T Pro",
    "peso": 200,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 649.99,
    "precioBulto": 649.99,
    "stock": 12,
    "oferta": false,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://cdn-files.kimovil.com/default/0009/25/thumb_824996_default_big.jpg"
  },
  {
    "id": '9',
    "brand": "Xiaomi",
    "name": "Xiaomi Poco X6",
    "peso": 192,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 299.99,
    "precioBulto": 299.99,
    "stock": 35,
    "oferta": true,
    "nuevo": false,
    "categoria": "Celulares",
    "img": "https://media.ldlc.com/r1600/ld/products/00/06/09/74/LD0006097489_0006097498.jpg"
  },
  {
    "id": '10',
    "brand": "Motorola",
    "name": "Motorola Edge 40 Pro",
    "peso": 199,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 799.99,
    "precioBulto": 799.99,
    "stock": 14,
    "oferta": false,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://www.techspot.com/images/products/2023/smartphones/org/2023-04-10-product-2.jpg"
  },
  {
    "id": '11',
    "brand": "Motorola",
    "name": "Motorola G84",
    "peso": 180,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 299.99,
    "precioBulto": 299.99,
    "stock": 22,
    "oferta": true,
    "nuevo": false,
    "categoria": "Celulares",
    "img": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g84-1.jpg"
  },
  {
    "id": '12',
    "brand": "Motorola",
    "name": "Motorola Razr 40 Ultra",
    "peso": 188,
    "medida": "Grs",
    "unidades": "1 Unidad",
    "unit_price": 1099.99,
    "precioBulto": 1099.99,
    "stock": 6,
    "oferta": false,
    "nuevo": true,
    "categoria": "Celulares",
    "img": "https://cdn.smart-gsm.com/blog/wp-content/uploads/2023/06/Motorola-Razr-40-Ultra.jpg"
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === id);
      resolve(product);
    }, 1000);
  });
};

export const getProductsByBrand = (brandId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter((prod) => prod.brand === brandId);
      resolve(filtered);
    }, 1000);
  });
};
