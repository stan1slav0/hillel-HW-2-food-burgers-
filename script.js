const burgers = {
    hamburger: 10,
    cheeseburger: 15,
    doubleCheese: 5
}

const potato = {
    small: 10,
    middle: 15,
    big: 20,
}

const sauce = {
    mayonnaise: 3,
    ketchup: 2
}


const userValue = confirm('Do you want to order burgers?', '');


if(userValue) {

    let burgerChoice = prompt('Do you want hamburger or cheeseburger?', '')

    const final = {
        finalBurgers : 'hamburger',
        finalPotato : 'small',
        finalSauce : 'ketchup'
    
    }

    
    let finalBurgersPrice = 0,
        finalPotatoPrice = 0,
        finalSaucePrice = 0;


    if(burgerChoice !== null && burgerChoice !== ''){
        if(burgerChoice.includes('hamburger')){
            finalBurgersPrice = burgers.hamburger
            final.finalBurgers = burgerChoice
        } else if(burgerChoice.includes('cheeseburger')){
            finalBurgersPrice = burgers.cheeseburger
            final.finalBurgers = burgerChoice
            if(burgerChoice.includes('cheeseburger')){
                let addCheese = confirm('Would you like to add double cheese?', '')
                if(addCheese){
                    finalBurgersPrice = burgers.cheeseburger + burgers.doubleCheese
                }
            }

        } else if(!burgerChoice.includes('hamburger') && !burgerChoice.includes('cheeseburger')){
            finalBurgersPrice = burgers.hamburger
        }
    } else {
        finalBurgersPrice = burgers.hamburger
    }

    let addPotato = confirm('Would you like potato?', '')

    if (addPotato) {

        let potatoChoice = prompt('Choose potato size: small/middle/big', '')
        
        if(potatoChoice == null || potatoChoice == ''){
            finalPotatoPrice = potato.small
        }else if (potatoChoice.includes('big')) {
            finalPotatoPrice = potato.big
            final.finalPotato = potatoChoice
        } else if (potatoChoice.includes('middle')) {
            finalPotatoPrice = potato.middle
            final.finalPotato = potatoChoice

        } else if (potatoChoice.includes('small')) {
            finalPotatoPrice = potato.small
            final.finalPotato = potatoChoice

        } else if (potatoChoice.includes('big') && potatoChoice.includes('middle') && potatoChoice.includes('small')) {
            finalPotatoPrice = potato.small
            final.finalPotato = potatoChoice

        } else if (!potatoChoice.includes('big') && !potatoChoice.includes('middle') && !potatoChoice.includes('small')) {
            finalPotatoPrice = potato.small
        }
    } else {
        finalBurgersPrice
    }

    let addSauce = confirm('Would you like to add sauce?', '');
    
        if (addSauce) {
            let sauseChoice = prompt('Choose sauce: ketchup/mayonnaise')
            if(sauseChoice == null || sauseChoice == ''){
                finalSaucePrice = sauce.ketchup
            }
            else if (sauseChoice.includes('ketchup')) {
                finalSaucePrice = sauce.ketchup
                final.finalSauce = sauseChoice

            } else if (sauseChoice.includes('mayonnaise')) {
                finalSaucePrice = sauce.mayonnaise
                final.finalSauce = sauseChoice
            } else if (!sauseChoice.includes('mayonnaise') && !sauseChoice.includes('ketchup')) {
                finalSaucePrice = sauce.ketchup
            }
        } else {
            finalBurgersPrice + finalPotatoPrice
        }
    
       let finalPrice = finalSaucePrice + finalBurgersPrice + finalPotatoPrice


        if(!addPotato && !addSauce){
                    document.write(`
                
        <div>
            <h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${final.finalBurgers} </li>
            </ul>

            <p>Price: ${finalPrice} UAH</p>
        </div>

        `);

        } else if(addPotato && addSauce ){
            document.write(`
                
        <div>
            <h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${final.finalBurgers} </li>
                <li>Potato 🍟: ${final.finalPotato} </li>
                <li>Sauce 🧂: ${final.finalSauce} </li>
            </ul>

            <p>Price: ${finalPrice} UAH</p>
        </div>

        `)
        } else if(addPotato && !addSauce){
            document.write(`
                
        <div>
            <h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${final.finalBurgers} </li>
                <li>Potato 🍟: ${final.finalPotato} </li>
            </ul>
        
            <p>Price: ${finalPrice} UAH</p>
        </div>
        
        `)
            
        } else if (!addPotato && addSauce) {
            document.write(`
                
        <div>
            <h2>Your order:</h2>
            <ul>
                <li>Bulka 🍔: ${final.finalBurgers} </li>
                <li>Sauce 🧂: ${final.finalSauce} </li>
            </ul>
        
            <p>Price: ${finalPrice} UAH</p>
        </div>
        
        `)

        }
}

