const arr = process.argv.slice(2);

if(arr.length == 2){
    console.log(`${arr[0]} is ${arr[1]}`);
}else if(arr.length == 1){
    console.log(`${arr[0]} is undefined`);
}else{
    console.log('undefined is undefined');
}
