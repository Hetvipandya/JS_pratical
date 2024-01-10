
function sequence(){
    let number = document.getElementById('num').value;
    let n1 = 0 , n2 = 1, next_num;
    for (let i=0 ; i<=number ; i++){ 
        document.getElementById('show').innerHTML = next_num;
        
        next_num =n1 + n2;
        n1 = n2;
        n2 = next_num;
        
    };
    

}
