function primenumber(){
    let number = document.getElementById('pnum').value;
    let isPrime = true;
    if(number==1){
      document.getElementById('show').innerHTML = "Number is Prime or Composite";
    } 
    else if(number > 1){
        for(let i = 2 ; i<number ; i++){
            if(number % 2==0){
                isPrime = false;
                break;
            }
        }
    
        if(isPrime){
            document.getElementById('show').innerHTML = "Number is Prime";
        }
        else{
            document.getElementById('show').innerHTML = "Number is not Prime";
        }
    }
}