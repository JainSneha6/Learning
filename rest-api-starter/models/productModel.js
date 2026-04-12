let products = [];
let count = 1;

exports.getAllProducts = () => products;

exports.getProductById = id => {
    return products.find(p => p.id === id);
}

exports.createProduct = (title, price) => {
    const id = count ++;
    const product = {id, title, price};
    products.push(product);
    return product;
}

exports.updateProduct = (id, title, price) => {
    const product = products.find(p => p.id === id);
    if(!product){
        return null;
    }
    product.title = title;
    product.price = price;
    return product;
};

exports.deleteProduct = id => {
    const index = products.findIndex(p => p.id === id);
    if(index === -1){
        return false;
    }
    products.splice(index, 1);
    return true;
}