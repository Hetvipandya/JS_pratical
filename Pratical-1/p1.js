let array = [];
function shorting(){
     let name = document.getElementById('number').value;
     array.push(name);
    //  console.log(name)
    let newArray = array.sort();
    document.getElementById('show').innerHTML = JSON.stringify(newArray);
}