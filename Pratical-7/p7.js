function doublevalue(){
    let value = [1,2,3,4,5,6,7,8,9];
    let newValue = value.map(function(el) {
        return[el,el]
    });
    document.write('newValue = ' +newValue);
}