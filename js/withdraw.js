// step-1
// first add event handler with the withdraw button..same like deposit.
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    // get the withdraw amount
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    
    // step-3
    // clear the withdraw input field
    withdrawField.value='';
    // step-4
    // get previous withdraw total
    const withDrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withDrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    // step-5
    // calculate total withdraw amount and set it to the withdraw total element
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    withDrawTotalElement.innerText=newWithdrawTotal;
    // step-6
    // get previous balance
    const balanceElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    // step 7
    // calculate new balance and set it to the  balance total element
    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
     balanceElement.innerText=newBalanceTotal;

})