let arr = process.argv.slice(2,3);

if(typeof Number(arr[0]) === 'number' && !isNaN(Number(arr[0]))){
    console.log("My number:", arr[0]);
}else{
    console.log("Not a number");
}