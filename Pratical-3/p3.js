function palindromechecker(){
      let number = document.getElementById('check').value;
      let palindrome = number.split("").reverse("").join("");
      if(number == palindrome){
        document.getElementById('show').innerHTML = "Is a Palindrome number"
      }else{
        document.getElementById('show').innerHTML = "Is Not a palindrome number"
      }
}