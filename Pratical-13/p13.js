function avgarray(){
    let array = [5,6,8,10,15];
    const sum = array.reduce((a,b) => a+b,0);
    const avg = (sum/array.length) || 0;
    document.write(sum);
    document.write("<br/>")
    document.write(avg);
    document.getElementById('show').innerHTML = array;
}