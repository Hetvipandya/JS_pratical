function objectcreation(){
    let person = {
        firstName : "Hetvi",
        lastName : "Pandya",
        age : 20,
        city : "Ahmedabad"
    };
    document.getElementById('show').innerHTML = "My name is" + " " +person.firstName +" "
    + person.lastName + " " + "I am" + person.age + "years old" + "I am live in"  + person.city;
}