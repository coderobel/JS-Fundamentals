const arr = process.argv.slice(2);
let i = 0;
if(i < 1){
    console.log(arr[0]);
    i++;
}else{
    console.log("No argument");
}