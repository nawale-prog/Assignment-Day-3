// 3. Complex Validation:


// Recode Example:
let record = {
    dealerName: "KGL Motors", 
    costUgX: 45000 
};

// 1. Check <or> in Length :
const isDealerNameValid = record.dealerName.length >= 2;

// 2. Check if <or> CostUgX:
const isCostValid = record.costUgX >= 10000;

// Combine the two validation:
const isRecordValid = isDealerNameValid && isCostValid;

console.log("--- 3. Complex Validation ---");
console.log(`Dealer Name Valid (length >= 2): ${isDealerNameValid} (${record.dealerName.length})`);
console.log(`Cost Valid (>= 10000): ${isCostValid} (${record.costUgX})`);
console.log(`Final Record Validation (&&): ${isRecordValid}`);

console.log('---------------------------------');


// Create a new Date():
const now = new Date();

// Use Date:
// Note: 
const month = now.getMonth() + 1;
const day = now.getDate();
const year = now.getFullYear();

// Create the human-readable:
const timestamp = `${month}/${day}/${year}`;

// Log final output:
console.log("--- 4. Date Logging ---");
console.log(`Sale on: ${timestamp}`);