
interface Product {
    description: String, 
    price: number
}

const phone: Product = {
    description: 'Nokia',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}


function taxCalculation(options: TaxCalculationOptions): number[] {

    let total = 0;

    const {tax, products} = options; //destructuring

    products.forEach(({price}) => {
        
         //destructuring const {price} = product;
        
        total += price;
    });

    return [total, total*tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;


const result = taxCalculation({
    products: shoppingCart, 
    tax: tax
})

const [productos, impuestos] = result; //destructuring

console.log('Total: ', productos);
console.log('Tax: ', impuestos);


export {}