// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    // step-3
// clear the deposit input field
    depositField.value='';
    // step-4
    // get the previous 00 from deposit
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    // step-5
    // calculate new deposit total and set the value to the deposit total
    const newDepositTotal = previousDepositTotal+newDepositAmount;
   depositTotalElement.innerText=newDepositTotal;
//    step-6
// get current balance..balance ta deposit onujayi change..
const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotalAmount= parseFloat(previousBalanceTotalString);
// step-7
// calculate the new balance and set it to the balance total element
const newBalanceTotal=previousBalanceTotalAmount+newDepositAmount;
balanceTotalElement.innerText= newBalanceTotal;



})