let arr = process.argv.slice(2,3);

if(typeof arr[0] == Number){
    console.log("My number:", arr[0]);
}else{
    console.log("Not a number");
}