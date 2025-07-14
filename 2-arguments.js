let argument = process.argv.slice(2);
let j = argument.length;

if(argument.join === ""){
    console.log("No argument");
}else if(j = 1){
    console.log("Argument found");
}else if(j >= 2){
    console.log("Arguments found");
}