function averageValue(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    const sum: number = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

const array = [5, 15, 18, 30];
const result = averageValue(array);
console.log(`Result: ${result}`);
