function formatCreditCardNumber(creditCardNumber) {
    if (typeof creditCardNumber !== "number") {
        return "Please provide a number for the credit card";
    } else {
    const creditCardNumberString = creditCardNumber.toString();
    let formattedCreditCardNumber = "";

    for (let i = 0; i<creditCardNumberString.length; i++) {
    formattedCreditCardNumber += creditCardNumberString[i];

    if (i>0 && (i+1)%4 === 0) {
        formattedCreditCardNumber += " ";
    }

    }
    return formattedCreditCardNumber;
    }
} 

const formattedCreditCardObject = formatCreditCardNumber(123456789101112);
console.log(formattedCreditCardObject);
