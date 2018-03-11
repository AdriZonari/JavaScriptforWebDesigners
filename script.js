(function() {
"use strict";

let state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);/* Listen to what comes from submit form. Fire the function to estimate total*/

    let btnEstimate = document.getElementById('btn-estimate');

    btnEstimate.disabled = true;

    state.addEventListener('change', function() {
        
        if(state.value === '') {
            btnEstimate.disabled = true;
           } else {
            btnEstimate.disabled = false;
           }
        

    });
});




function estimateTotal(e) {
    e.preventDefault(); /* Default is that the pages upload after the submisson of the form*/
       
    if (state.value === '') {
        alert("Please choose a shipping destination");
    
        state.focus();
    }

    let itemBball = parseInt(document.getElementById('txt-q-bball').value, 10) || 0,
        itemJersey = parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
        itemPower = parseInt(document.getElementById('txt-q-power').value, 10) || 0 ,
        itemWater = parseInt(document.getElementById('txt-q-water').value, 10) || 0,
        shipingState = state.value,
        shipingMethod = document.querySelector('[name=r_method]:checked').value || " ";
    
    let totalQty = itemBball + itemJersey + itemPower + itemWater,
        shippingCostPer,
        totalShippingCost,
        taxFactor = 1,
        estimate,
        totalPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower) + (4 * itemWater);

        if (shipingState === 'CA'){
            taxFactor = 1.075;
        } else if(shipingState === 'WA'){
            taxFactor = 1.065;
        }

        if (shipingMethod == 'pickup'){
            shippingCostPer = 0;
        }else if (shipingMethod == 'usps'){
            shippingCostPer = 2;
        }else if (shipingMethod == 'ups'){
            shippingCostPer = 3;
        }

        totalShippingCost = shippingCostPer * totalQty;

        estimate = '$' + ((totalPrice * taxFactor) + totalShippingCost).toFixed(2);

        document.getElementById('txt-estimate').value = estimate;

        let results = document.getElementById('results');

        results.innerHTML = 'Total items: ' + totalQty + '<br>';
        results.innerHTML += 'Total shipping cost: $' + totalShippingCost.toFixed(2) + '<br>'; 
        results.innerHTML += 'Tax: ' + ((taxFactor-1)*100).toFixed(2) + '% (' + shipingState + ')';
        //total items
        //total shipping cost
        //tax
    }

})();
