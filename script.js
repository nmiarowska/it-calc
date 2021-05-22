var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
function ConvertOther(){
    var number = document.getElementById("other_input").value;
    var numbers = number.toString().split('');
    var sys_number = document.getElementById("sys_input_other").value;

    if (sys_number > 20)
    {
        alert("Numeric system out of range!");
        return false;
    }
        
    for (var i = 0; i < numbers.length; i++)
    {   
        if (numbers[i] >= 'A' && numbers[i] <='J'){
            if (sys_number <= 10)
            {
                alert("Given numeric system doesn't allow letters!");
                return false;
            }
            for (var j = 0; j < letters.length; j++)       
            {
                if (numbers[i] == letters[j])
                {
                    tmp = 10 + j;
                    if (tmp >= sys_number){
                        alert("Number includes letters not allowed in given numeric system!");
                        return false;
                    }
                }
            }
        }
        else if (numbers[i] >= sys_number && sys_number <= 10)
        {
            alert("Number can't include characters greater than allowed in given numeric system!");
            return false;
        }
    }

    document.getElementById("results_other").innerHTML = "";
    document.getElementById("steps_other").innerHTML = "";
    var result = 0;
    var mult = 0;
    
    for (var i = 0, j = numbers.length; i<numbers.length, j > 0; i++, j--)
    {
        if (numbers[i] >= 'A' && numbers[i] <='J')
        {
            for (var k = 0; k < letters.length; k++)       
            {
                if (numbers[i] == letters[k])
                {
                    numbers[i] = 10 + k;
                }
            }
        }
        mult = numbers[i] * Math.pow(sys_number, j-1);
        result += mult;
        document.getElementById("steps_other").innerHTML += numbers[i] + " * " + sys_number + "<sup>" +
         (j-1) + "</sup> = " + mult + "<br>";
    }
    
    document.getElementById("other_inputed").innerHTML = number + "<sub>" + sys_number + "</sub>";
    document.getElementById("results_other").innerHTML = (result + "<sub>10</sub>");
    return false;
}

function ConvertDec(){
    var dec_number = document.getElementById("dec_input").value;
    var sys_number = document.getElementById("sys_input").value;
    document.getElementById("results").innerHTML = "";
    document.getElementById("steps").innerHTML = "";
    var mod, mod2;
    var n = dec_number;
    var results = [];

    if (sys_number > 20)
    {
        alert("Numeric system out of range!");
        return false;
    }
    
    do
    {
        document.getElementById("steps").innerHTML += n;
        mod = n % sys_number;
        n = ~~(n / sys_number);
        mod2 = mod;
        if (mod >= 10)
        {
            mod2 = letters[mod-10];
        }
        results.push(mod2);  
        document.getElementById("steps").innerHTML += (" : " + sys_number + " | " + mod2 + "<br>");
    } while (n>=1); 

    document.getElementById("dec_inputed").innerHTML = (dec_number + "<sub>10</sub>");
    document.getElementById("sys_inputed").innerHTML = sys_number;

    for (var i = results.length-1;  i >= 0; i--)
    {
        document.getElementById("results").innerHTML += results[i];
    }


    return false;
}
