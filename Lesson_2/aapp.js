var bookPrice = "9";
console.log("I buy 2 books. Total", bookPrice + bookPrice);


// Number
// unary: +-
//binary: +-*/%**
var accountBalance = 500;
console.log(accountBalance);
// accountBalance = accountBalance + 100; //shorthand
// accountBalance += 100; //shorthand
// accountBalance -= 100; //shorthand
// accountBalance /= 100; //shorthand
// accountBalance %= 100; //shorthand
// accountBalance **= 100; //shorthand
// accountBalance ++ ; //accountBalance = accountBalance + 1
// console.log(accountBalance);

//Bolean
//unary : && ||
//binary: && ||
//binary: ><>=< != == !== ===

//Falsy (ложноподобные): false, 0, NaN, undefined, null,

var customerIsResident = true;
var creditRequestum = 300000;

if(customerIsResident || creditRequestum <= 100000) {
    console.log("Credit issue allowed");
} else if (creditRequestum <=100000) {
    console.log("Credit issue allowed");
} else {
    console.log("Credit issue not allowed");
}
var depositPeriod = 24; //in monthes

if (depositPeriod > 0 && depositPeriod < 24) {
    console.log("SCHORT-TERM");
} else if (depositPeriod >= 24 && depositPeriod < 60) {
    console.log('MIDDLE-TERM');
}else if (depositPeriod >= 60) {
    console.log("LONG-TERM");
} else{
    console.log("ERROR");
}

var internetBankingUser = true;
var isMobileBankingUser = false;

if(internetBankingUser && isMobileBankingUser){
    accountBalance +=100;
}

var customerCardType = "MASTERCaRD";

// if(customerCardType === "VISA"){
//     console.log("Send request to VISA");
// }else if(customerCardType === "ELCARD") {
//     console.log("Send request to IPS");
// }else if(customerCardType === "MasterCard" ||
//          customerCardType === "Maestro"
// ) {
//     console.log("Send request to MasterCard");
// }

switch (customerCardType.toLocaleUpperCase()) {
    case "VISA":
        console.log("Send request to VISA");
        break;
    case "ElCARD":
        console.log("Send request to IPS");
        break;
    case "MASTERCARD":
    case "MAESTRO":
        console.log("Send request to Mastercard");
        break;
    default:

}
var numberFromUser = "5";

switch (numberFromUser) {
    case 5:
        console.log("V");
        break;

    default:
        console.error("not valid number");
}

var customerContactPhones = ["+996500112233", "+996555123432", "+79991112233"]
// indexes
// if(customerContactPhones[0].startsWith('+996')){
//     console.log(customerContactPhones[0], "KG number");
//     }else if(customerContactPhones[0].startsWith('+7')){
//         console.log(customerContactPhones[0],"RU number");
//     }else{
//         console.log(customerContactPhones[0],"another number");
//     }

// if(customerContactPhones[1].startsWith('+996')){
//     console.log(customerContactPhones[1], "KG number");
//     }else if(customerContactPhones[1].startsWith('+7')){
//         console.log(customerContactPhones[1],"RU number");
//     }else{
//         console.log(customerContactPhones[1],"another number");
//     }

//     if(customerContactPhones[2].startsWith('+996')){
//         console.log(customerContactPhones[2], "KG number");
//         }else if(customerContactPhones[2].startsWith('+7')){
//             console.log(customerContactPhones[2],"RU number");
//         }else{
//             console.log(customerContactPhones[2],"another number");
//         }

// // for(;;)
// цикл с счетчиком
for(var i = 0; i < 3; ++i){
    if(customerContactPhones[i].startsWith('+996')){
        console.log(customerContactPhones[i], "KG number");
        }else if(customerContactPhones[i].startsWith('+7')){
            console.log(customerContactPhones[i],"RU number");
        }else{
            console.log(customerContactPhones[i],"another number");
        }
}

// var depositsPeriods = [25,]

var customerInn = "10583623635643";
var result = 0;
for (var digit of customerInn) {
   if(digit >= "0" && digit <="9"){
     result++;
   }
}

   



console.log(result === 14 ? "INN valid" : "INN invalid");
// if(result === 14){
//     console.log("INN valid");
// }else{
//     console.log("INN invalid");
// }

var boolValue = false;
console.log(boolValue ? "Да" : "Нет");