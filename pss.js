function generateChars(start,end){
    let chars=" ";
    for (let index=start; index <=end; index++){
        chars +=String.fromCharCode(index);


    }
    return chars;
}
function generateRandom(chars,range){
    let randFromRange=chars.charAt(Math.floor(Math.random()*range));
return randFromRange;
}
function generatePwd(total_len, upperStatus, lowerStatus,numberStatus,splStatus){
    let pwd=" ";
    let chars=" ";
    let count=" ";
    let allchars=" ";

    if(upperStatus){
        chars=generateChars(65,90);
        allchars=chars;
        pwd+=generateRandom(chars,chars.length);
        count+=1;
    }
    if(lowerStatus){
        chars=generateChars(97,122);
        allchars+=chars;
        pwd+=generateRandom(chars,chars.length);
        count+=1;
    }
    if(numberStatus){
        chars=generateChars(48,57);
        allchars+=chars;
        pwd+=generateRandom(chars,chars.length);
        count+=1;
    }
    if(splStatus){
        chars=generateChars(35,38).concat(generateChars(63,64)).contact(genarateChars(40,42)).concat(generateChars(91,95));
        allchars+=chars;
        pwd+=generateRandom(chars,chars.length);
        count+=1;
    }
    for(let index=count;index<total_len;index++){
        pwd+=generateRandom(allchars,allchars.length);
    }

    
    return pwd;
}
let total_len=10;
let upperStatus,lowerStatus,splStatus;

upperStatus=true;
lowerStatus=true;
numberStatus=true;
splStatus=true;
let user_pwd= generatePwd(total_len,upperStatus,lowerStatus,numberStatus,splStatus);
console.log("user password:"+user_pwd);
