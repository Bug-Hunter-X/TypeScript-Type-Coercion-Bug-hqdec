function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(5, 10); // Works correctly
let result2 = addSafe(5, 10); // Works correctly

try {
  let result3 = addSafe(5, "10"); // Throws error at runtime
} catch (error) {
  console.error(error);
}

//Alternative solution using type guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafeTypeGuard(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

let result4 = addSafeTypeGuard(5,10); //Works correctly

try {
    let result5 = addSafeTypeGuard(5, "10"); //Throws error at runtime
} catch(error) {
    console.error(error);
}