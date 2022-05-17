// FUNCTIONS

// Function that controls everything after the compute button is pressed. 

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    

    if (principal < 1 ) {
        alert('Enter a postive number.')
        // document.getElementById("notify").innerHTML = '<strong style="color: red">Enter a positive number.</strong><br><br>'
    } else {
        document.getElementById("result").innerHTML = `<br><br>If you deposit <span style="background-color: yellow">${principal}</span>, at an interest rate of <span style="background-color: yellow">${rate}</span>. You will recieve an amount of <span style="background-color: yellow">${interest}</span>, in the year <span style="background-color: yellow">${year}</span>.`;
    }

    

}

// Function to update the rate value.
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}


