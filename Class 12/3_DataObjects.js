let now = new Date();

console.log(now);                // full date-time
console.log(now.getFullYear());  // year
console.log(now.getMonth());     // 0-11
console.log(now.getDate());      // day
console.log(now.getHours());
console.log(now.getMinutes());


// Create custom date
let birthday = new Date("2026-05-15");
console.log(birthday);

// Timestamp (used in DBs)
console.log(Date.now()); // milliseconds since 1970