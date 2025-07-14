let arr = process.argv.slice(2);
if(typeof Number(arr[0]) == "number"){
    let x = Number(arr[0]);
    let i = 0;
    while (i < x){
        console.log('C is fun');
    }
}else{
    console.log('Missing number of occurrences');
}
