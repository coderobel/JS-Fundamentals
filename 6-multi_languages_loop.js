let arr = process.argv.slice(2);
let i = 0;
let result = "";

while (i < 1) {
    result += `${arr[0]} is ${arr[1]}\n`;
    i++;
}

console.log(result.trim());