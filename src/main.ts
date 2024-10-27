function reverseArray(arr: any[]): any[] {
    return arr.reverse();
}

const arr = [1, 2, 3]
const reversedArr = reverseArray(arr)
console.log(reversedArr === arr);
console.log(arr);
