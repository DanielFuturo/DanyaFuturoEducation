const Products = require('./products');
const rl = require('./readline');

let Basket = new Map();

function AskForNewProduct() 
{ 
    rl.question('Please, enter an item Id that you want to buy: ', (id) => {
        LookupProduct(id);
    });
}

function AskForList() {
    rl.question('You successfully added an item, do you want to complete payment? Y/N ', (answer) => {
        if(answer.toUpperCase() == "Y") PrintReceipt();
        else if(answer.toUpperCase() == "N") AskForNewProduct();
        else 
        {
            console.log("Invalid Answer");
            AskForList();
        }

    });
}

function LookupProduct(id) 
{
    for(product of Products)
    {
        if(product.ProductId == id)
        {
            SaveToBasket(id);
            return;
        }
    }
    console.log(`No product with id ${id} found.`);
    AskForNewProduct();
}

function SaveToBasket(id) {
    if(Basket.has(id))
        Basket.set(id, Basket.get(id) + 1);
    else
        Basket.set(id, 1);
    AskForList();
}

function PrintReceipt() 
{
    let price = 0;
    for(key of Basket.keys())
    {
        for(product of Products)
        {
            if(key == product.ProductId)
            {
                console.log(`Id: ${product.ProductId}, Name: \'${product.Name}\', Quantity: ${Basket.get(key)}, Price: ${product.Price}`);
                for(var i = 0; i < Basket.get(key); i++)
                {
                    price += product.Price;
                }
                break;
            }
        }
    }
    console.log(`Total: ${price.toFixed(2)}`);
    rl.question('', (answer) => {
        Basket.clear();
        AskForNewProduct();
    });

}

module.exports = AskForNewProduct;