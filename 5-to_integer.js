let arr = process.argv.slice(2);

if(Number(arr[0])){
    console.log("My number: ", arr[0]);
}else{
    console.log("Not a number");
}