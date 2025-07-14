const arr = process.argv.slice(2);

if(arr.join() === ""){
    console.log("No argument");
}else{
    console.log(arr[0]);
}