function oddeven(){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let even = arr.filter(number => {
        return number % 2===0;
    });
    document.write('even number = ' +even);
    let odd = arr.filter(number =>{
        return number % 2 !== 0;  
    });
    document.write('odd number = ' +odd);
}