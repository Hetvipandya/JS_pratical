
function largestarray(){
    let number = [2,15,26,3,1,50,90];
    let largest = number[0];
    let smallest = number[0];
    for(let i=0 ; i<number.length; i++){
        if(number[i] > largest){
            largest = number[i];
        }
        if(number[i] < smallest){
            smallest = number[i];
        }
    }
    document.write('largest number = '+largest);
    document.write('smallest number = '+smallest);
}