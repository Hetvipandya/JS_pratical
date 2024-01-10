function commonarray(){
    let array1 = [1,4,5,15,26,39,50,75];
    let array2 = [4,5,15,26,75,90,3,7];
    let commonArray = [];
    for(let i=0; i<array1.length ; i++){
        for(let j=0 ; j<array2.length ; j++){
            if(array1[i] === array2[j]){
                commonArray.push(array1[i]);
            }
        }
    }
    document.getElementById('show').innerHTML = commonArray;
    document.write(array1);
    document.write("<br/>");
    document.write(array2);
}