
//CODERHOUSE 2023
//Curso Programación Backend

//COMISIÓN 50000
//PROFESOR Diego Naranjo
//TUTORÍA: Mauro Calodolce

//ESTUDIANTE: Serrano, Mariano



//DESAFÍO 1: Clases con ECMAScript y ECMAScript avanzado

//Creación de la clase ProductManager


class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }

    static products = [];

    //Método para agregar productos al array products
      addProduct = () => {
      if (this.title == null || this.description == null || this.price == null || this.thumbnail == null || this.code == null || this.stock == null) {
        console.log('No se puede agregar elemento porque falta información.')
      } else {
          let newCode = ProductManager.products.find((product) => product.code === this.code)
          if (newCode) {
              console.log('ERROR: El código '+this.code+ ' ya se encuentra utilizado.')
          } else {
              console.log(`El código ${this.code} se puede ingresar.`)
              ProductManager.products.push(this);
              if (ProductManager.products.length == 1) {
                  this.id = 1;
              } else {
                  this.id = ProductManager.products.length;
              };
          }
  
      
          } 
      };
      //Método para obtener los productos que se encuentran en el array products con su respectivo ID
      getProducts = () => {
        if (ProductManager.products.length == 0) {
            console.log(ProductManager.products)
        } else {
            ProductManager.products.forEach((e) =>
                console.log(`ID: ${e.id}, Title: ${e.title}, Description: ${e.description}, Code: ${e.code}, Price: ${e.price}, Stock: ${e.stock}`))
        }
      }
      //Método para buscar productos por su ID
      getProductById = (id) => {
          let searchID = ProductManager.products.find((product) => product.id === this.id)
          if (searchID) {
              const index = ProductManager.products.findIndex(object => {  return object.id === this.id})
              console.log(`El producto encontrado es:
  ID: ${ProductManager.products[index].id}, Title: ${ProductManager.products[index].title}, Description: ${ProductManager.products[index].description}, Code: ${ProductManager.products[index].code}, Price: ${ProductManager.products[index].price}, Stock: ${ProductManager.products[index].stock}`)
          } else {
              console.log('Not found')
          }
      
      }
  }


//TESTING

//Creación de una nueva instancia de la clase

let product1 = new ProductManager('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abd123', 25)

//Comprobación de su creación

console.log(product1)

//Comprobación de que al no haberse agregado el producto a products, este está vacío.

product1.getProducts()

//Agregamos la instancia al array products

product1.addProduct()

//Comprobamos que se haya agregado a products

product1.getProducts()

//Creamos una nueva instacia con el mismo code que la instacia anterior y comprobamos que no nos dejará agregarlo a products por estar su code repetido

let product2 = new ProductManager('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abd123', 25)

product2.addProduct()

//Creamos nuevas instancias de la clase y las agregamos al array products. Luego llamamos al array y comprobamos que son agregados y su ID no se repite.

let product3 = new ProductManager('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abd124', 25)
let product4 = new ProductManager('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abd125', 25)
let product5 = new ProductManager('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abd126', 25)

product3.addProduct()
product4.addProduct()
product5.addProduct()

product2.getProducts()

//Comprobamos que el método getProductsById() devuelve el producto si está ingresado y sino devuelve 'Not Found'

product1.getProductById()
product2.getProductById()



