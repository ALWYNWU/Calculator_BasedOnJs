function init(){

    var num = document.getElementById("num");
    //DOM

    num.value = 0;
    //default display is 0

    num.disabled = "disabled";
    //Disable keyboard input

    var n_ref;
    var operator_ref;

    var oButton = document.getElementsByTagName("input");
    // Store all the DOMs with the name is input in the array
    for (var i=0;i<oButton.length;i++){
        oButton[i].onclick = function (){
           if (!isNaN(this.value)){
               num.value = (num.value + this.value)*1;
              /* 
                The return value of isNaN represents the value can be converted
                to a number or not. If so, splice the string. Multiply by 1 to remove
                the 0 at the beginning. Ex: 0123 * 1 = 123 
              */
           } else {
               var operator = this.value;

               switch (operator){
                   case "+":
                       n_ref = Number(num.value);
                       num.value = 0;
                       operator_ref = "+";
                       break;
                   case "-":
                       n_ref = Number(num.value);
                       num.value = 0;
                       operator_ref = "-";
                       break;
                   case "*":
                       n_ref = Number(num.value);
                       num.value = 0;
                       operator_ref = "*";
                       break;
                   case "/":
                       n_ref = Number(num.value);
                       num.value = 0;
                       operator_ref = "/";
                       break;
                   case "<-":
                       num.value = back(num.value);
                       break;
                   case ".":
                       num.value = dec_number(num.value);
                       break;
                   case "+/-":
                       num.value = Number((num.value)*-1);
                       break;
                   case "C":
                       num.value = "0";
                       break;
                   case "=":
                       switch (operator_ref){
                           case "+":
                               num.value = n_ref + Number(num.value);
                               break;
                           case "-":
                               num.value = n_ref - Number(num.value);
                               break;
                           case "*":
                               num.value = n_ref * Number(num.value);
                               break;
                           case "/":
                               if (Number(num.value)===0){
                                   alert("The divisor cannot be zero!")
                                   num.value = 0;
                               } else {
                                   num.value = n_ref / Number(num.value);
                               }
                               break;
                       }
                       break;
               }
           }
        }
    }

}


function dec_number(n){
    if (n.indexOf(".")===-1){
        // Equal to -1 means no decimal point
        n = n+".";
    }
    return n;
}

function isNull(n){
    if (n==="0"||n.length===0){
        return true;
    } else {
        return false;
    }
}

function back(n){
    n = n.substr(0,n.length-1);
    // Back function Delete the last bit of the string
    if (isNull(n)){
        n="0";
    }
    return n;
}

function hyperlink(){
    document.getElementById("src").onclick = function (){
        window.location.href = "https://github.com/ALWYNWU/Calculator_BasedOnJs.git";
    }
}




