function mergarray(){
    let array1 = [1,28,30,4,5];
    let array2 = [6,7,81,9,10];
    let newArray = array1.concat(array2);
    let array3 = newArray.sort(function(a, b){return a - b});
    

    document.getElementById('show').innerHTML = array3;
}