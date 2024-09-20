function addnum(a,b){
    return a+b;
}
let sum=addnum(5,10);
console.log(sum);
let calculator={
    add:function(a,b){
    return a+b; 
    },
    subtract:function(a,b){
        return a-b;
    }
};
console.log(calculator.add(5,10));
console.log(calculator.subtract(7,5));
/*syntax is function functionname(parameter){
}
return result*/