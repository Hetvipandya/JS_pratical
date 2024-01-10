function shorting(){
    let array = [15,26,9,3,33];
    let number = [15,26,9,3,33];
    array.sort((a,b)=>a - b);
    number.sort((a,b)=> b - a);
    document.write('array = ' +array);
    document.write('number = ' +number);
}