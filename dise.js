function diseRoller(n){
    var valu='123456';
    let number='';
    for(let i=0;i<n;i++){
        number+=valu[Math.floor(Math.random()*6)];
    }
return number;
}
console.log(diseRoller(1));