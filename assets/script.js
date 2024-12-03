document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult(){
        console.log('current value: ', currentValue);
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("÷", "/")
            .replace("%", "*0.01")
            .replace("sin", "Math.sin")
            .replace("cos", "Math.cos")
            .replace("tan", "Math.tan")
            .replace("π", "Math.PI")
            .replace("sin⁻¹", "Math.asin")
            .replace("cos⁻¹", "Math.acos")
            .replace("tan", "Math.atan")
            .replace("e", "Math.E")
            .replace("ln", "Math.log")
            .replace("log", "Math.log10")
            .replace("eˣ", "Math.pow(Math.E,")
            .replace("10ˣ", "Math.pow(10,")
            .replace("1/x", "")
            .replace("x^y", "")
            .replace("n√x","")
            .replace("Ans", display.value)
            .replace("Rand", "Math.random()")

        console.log('converted value: ', convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
        Ans = display.value
    }

    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click', function(){
            const value = button.innerText;

            if(value == "AC"){
                currentValue = "";
                display.value = currentValue;
            }else if(value == "="){
                evaluateResult();
            } 
                
                
               else {
                currentValue += value;
                display.value = currentValue;
                //console.log('currentValue:', currentValue);
                }

            
            
        })
        
    }    
    
    
});