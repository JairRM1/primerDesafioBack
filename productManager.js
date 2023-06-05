

class ProductManager{
    constructor(){
        this.products = [];
    }


getProducts = () =>{
    return this.products;
}

addProducts = (title, description,price,thumnail,code,stock) => {
    const product ={
        title, 
        description,
        price,
        thumnail,
        code,
        stock,
        products: []
    }
    if (this.products.length === 0){
        product.id = 1
    }else {
        product.id = this.products [this.products.length-1].id+1
    }

    this.products.push(product)
}

getProductById = (idProduct) => {
    const productIndex = this.products.findIndex(product => product.id === idProduct);
    if (productIndex === -1){
        console.log ("Not Found");
        return;
       
    }
    this.products[productIndex].products.push(idProduct)
}

};

const manejadorProductos = new ProductManager ();
manejadorProductos.addProducts ('Café', 'café molido', 200, 'sin imágen', 'cfmm', 4448 );
manejadorProductos.addProducts ('Jamón', 'Jamón de Pavo', 95, 'sin imágen', 'JSRP', 365 );
manejadorProductos.addProducts ('Pan', 'Pan blenco', 32, 'sin imágen', 'PBBG', 2000 );

manejadorProductos.getProductById(1);
manejadorProductos.getProductById(2);
manejadorProductos.getProductById(3);


console.log(manejadorProductos.getProducts());