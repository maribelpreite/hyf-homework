// THIS IS A SECOND VERSION OF THE FIRST CARD NUMBER EXERCISE BUT ADDING THE NAME OF THE CARD TYPE AND FORMATTING IT DEPENDING ON THE AMOUNT OF DIGITS AND CERTAIN PATTERNS


function ccStringDivider (creditCardNumber) {
    const creditCardNumberString = creditCardNumber.toString();
    let formattedCreditCardNumber = "";

    for (let i = 0; i<creditCardNumberString.length; i++) {
        formattedCreditCardNumber += creditCardNumberString[i];

        if (creditCardNumberString.length = 16) {
            if (i>0 && (i+1)%4 === 0) {
                formattedCreditCardNumber += " ";
            }

        } else if (creditCardNumberString.length = 15) {
            if (i===3 || i === 9) {
                formattedCreditCardNumber += " ";
            }
        }
        
        }
        return formattedCreditCardNumber;
}

function formatCreditCardNumber(creditCardNumber) {
    const creditCardNumberString = creditCardNumber.toString();
    const creditCardFirstNumber = creditCardNumberString[0];
    const errorMessage = "Please provide a valid credit card number";

    let cardType = "";
    let edittedCardNumber = "";

    if (typeof creditCardNumber !== "number") {
        return "Please provide a number for the credit card";

    } else if (creditCardNumberString.length<15 || creditCardNumberString.length>17) {
        return "You must provide 15 or 16 digits for your credit card number";

    } else if (creditCardNumberString.length === 16) {
        edittedCardNumber = ccStringDivider(creditCardNumber);

            if (creditCardFirstNumber === "4") {
            cardType = "VISA ";
            return cardType + edittedCardNumber;

            } else if (creditCardFirstNumber === "5") {
                cardType = "MASTER ";
                return cardType + edittedCardNumber;

            } else {
                return errorMessage;
            }

    } else if (creditCardFirstNumber === "3") {
        cardType = "AMEX ";
        edittedCardNumber = ccStringDivider(creditCardNumber);
        return cardType + edittedCardNumber;

    } else {
        return errorMessage;
    }
} 

const formattedCreditCardObject = formatCreditCardNumber(323456789012345);
console.log(formattedCreditCardObject);
