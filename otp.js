var otp=prompt("Enter your mobile number");
console.log(otp);

function OTPgenerate(digits)
{
    var numbers='0123456789';
    let OTP='';
    for(let i=0;i< digits;i++){
        OTP+=numbers[Math.floor(Math.random()*10)];
    }
    return OTP;
}
console.log(OTPgenerate(5));
function OTPgenerate(alphabets)
{
    var string="a to z";
    let chars='';
    for(let index=0;index< alphabets;index++){
        chars+=string[Math.floor(Math.random()*24)];
    }
    return chars;
}
console.log(OTPgenerate(5));