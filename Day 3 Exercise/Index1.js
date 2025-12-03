
 //1. Tonnage Validation
 

let procurementTonnage = 1500; 

const MIN_TONNAGE = 1000;

let meetsRequirement = procurementTonnage >= MIN_TONNAGE;
console.log(`Tonnage Validation: ${procurementTonnage}kg >= ${MIN_TONNAGE}kg is ${meetsRequirement}`);

console.log('---------------------------------');


 // 2. Strictness Check
 
let costStr = '5000';
let costNum = 5000;

console.log(`Loose Comparison (==): ${costStr} == ${costNum} is ${costStr == costNum}`);

console.log(`Strict Comparison (===): ${costStr} === ${costNum} is ${costStr === costNum}`);


// Answer the question
console.log('\nWhy is === safer for KGL?');
console.log('The === operator is safer because it strictly checks both the **value** and the **data type**. This prevents unexpected issues from type coercion, ensuring accurate comparisons for critical data like cost.');