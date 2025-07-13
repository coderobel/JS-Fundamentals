const arr = process.argv.slice(2);

if(arr){
    console.log(arr[0]);
}else{
    console.log("No argument");
}