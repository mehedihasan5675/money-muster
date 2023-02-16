function getNumberFromInput(id){
    const inputField =document.getElementById(id).value;
    const inputNumber =parseInt(inputField);
    return inputNumber;
}

function getNumberFromText(id){
    const inputField = document.getElementById(id).innerText;
    const inputNumber =parseInt(inputField);
    return inputNumber;
}

function getIdField(id){
    const inputField = document.getElementById(id);
    return inputField;
}
////////////////////////////
// common function end
///////////////////////////
document.getElementById('calculate_btn').addEventListener('click',function(){
   const foodCost = getNumberFromInput('food_input');
   const rentCost = getNumberFromInput('rent_input');
   const clothesCose =getNumberFromInput('clothes_input');
   const incomeValue =getNumberFromInput('income_input');
   //Validation start
    if(incomeValue <0){
        alert ("Income value don't be negative .");
        return
    }else if(foodCost >incomeValue || rentCost>incomeValue || clothesCose > incomeValue){
        alert ('This Cost is more than your income!');
        return}
        
    else if( foodCost<0 || rentCost<0 || clothesCose < 0){
        alert ("Don't provide negative value.");
        return;
    }
    //Validation end
   const totalExpenses =foodCost + rentCost + clothesCose; 

   if(totalExpenses>incomeValue){
    alert ('You have not enough money')
   }
   getIdField('expenses_id').innerText =totalExpenses;

   const balanceValue=incomeValue - totalExpenses;
   getIdField('balance_id').innerText=balanceValue;


})


document.getElementById('save_btn').addEventListener('click',function(){
    const savingValue = getNumberFromInput('save_input');
    const incomeValue=getNumberFromInput('income_input');
    const saveAmount = incomeValue * (savingValue / 100);
   
   const previouseBalance= getNumberFromText('balance_id');

   //Validation start
    if(savingValue<0 || savingValue>100){
    alert ('please: saving with valid percentage.');
    return;
   }else if(saveAmount>previouseBalance){
    alert ("You don't saving money more than your current balance after Costing.");
    return;
   }
   //Validation end
   getIdField('saving_amount').innerText=saveAmount;


   const remainingBalance=previouseBalance - saveAmount;
    getIdField('remaining_id').innerText =remainingBalance;
})