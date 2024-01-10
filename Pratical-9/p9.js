function removeDuplicate(){
    let arr = ["banana" , "apple" , "mango" , "banana" , "apple" , "mango"];
    let newArray = arr.filter((item , index) => arr.indexOf(item) === index);
    document.write('removeDuplicate = ' +newArray);
}