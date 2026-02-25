let weakMap = new WeakMap();

let obj = {};
weakMap.set(obj, "data");

console.log(weakMap.get(obj));