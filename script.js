let btn1 = document.getElementById("length");
btn1.addEventListener("click", function () {
    let target1 = document.querySelector(".choose");
    target1.innerHTML = "You Selected Length. Please select From: and To: (KM, M, CM).";
    target1.style.backgroundColor = "black";

    let select=document.getElementById("user");
    let firstopt=select.options[1];
    firstopt.value="Km";
    firstopt.text="Kilometer";

    let secondopt=select.options[2];
    secondopt.value="M";
    secondopt.text="Meter";

    let thirdopt=select.options[3];
    thirdopt.value="Cm";
    thirdopt.text="Centimeter";

    
    let select1=document.getElementById("output");
    let fourthopt=select1.options[1];
    fourthopt.value="Km";
    fourthopt.text="Kilometer";

    let fifthopt=select1.options[2];
    fifthopt.value="M";
    fifthopt.text="Meter";

    let sixthopt=select1.options[3];
    sixthopt.value="Cm";
    sixthopt.text="Centimeter";

    let convertbtn=document.getElementById("su_button");
    convertbtn.addEventListener("click",function(){
        let input=parseFloat(document.getElementById("fromuser").value);
        let fro=document.getElementById("user").value;
        let to=document.getElementById("output").value;
        let result;
        if (fro==="Km" && to==="M")result=input*1000;
        else if(fro==="M" && to==="Km")result=input/1000;
        else if(fro==="M" && to==="Cm")result=input*100;
        else if(fro==="Cm" && to==="M")result=input/100;
        else if(fro==="Km"&& to==="Cm")result=input*100000;
        else if(fro==="Cm"&& to==="Km")result=input/100000;
        else if(fro===to)result=input;
        else result="INVALID";

        document.getElementById("touser").value=result;
         document.querySelector(".result").innerHTML=` Result : ${input} ${fro} = ${result} ${to} `
        
    });

});
let btn2=document.getElementById("weight");
btn2.addEventListener("click",function(){
   let target2 = document.querySelector(".choose");
    target2.innerHTML = "You Selected Weigth. Please select From: and To: (Kg,G,Pd).";
    target2.style.backgroundColor = "black";

    const units=[{value:"Kg",text:"Kilograms"},{value:"g",text:"Grams"},{value:"Pd",text:"Pounds"}];

    function populateoptions(selectid,units){
        let select=document.getElementById(selectid)
        for (let i = 0; i < units.length; i++) {
             if (select.options[i + 1]) { 
                select.options[i + 1].value = units[i].value;
                select.options[i + 1].text = units[i].text;
            }
        }
    }
    populateoptions("user",units);
    populateoptions("output", units);
    
    let convertbtn=document.getElementById("su_button");
    convertbtn.addEventListener("click",function(){
        let input=parseFloat(document.getElementById("fromuser").value);
        let fro=document.getElementById("user").value;
        let to=document.getElementById("output").value;
        let result;
        if (fro==="Kg" && to==="g")result=input*1000;
        else if(fro==="g" && to==="Kg")result=input/1000;
        else if(fro==="Kg" && to==="Pd")result=input*2.20462;
        else if(fro==="Pd" && to==="Kg")result=input/2.20462;
        else if(fro==="g"&& to==="Pd")result=input*0.00220462;
        else if(fro==="Pd"&& to==="g")result=input/0.00220462;
        else if(fro===to)result=input;
        else result="INVALID";

        document.getElementById("touser").value=result;
         document.querySelector(".result").innerHTML=` Result : ${input} ${fro} = ${result} ${to} `
        
    });
    
            
    });


// for Area

let btn3=document.getElementById("area");
btn3.addEventListener("click",function(){
   let target2 = document.querySelector(".choose");
    target2.innerHTML = "You Selected Area. Please select From: and To: (m²,acre,ft²).";
    target2.style.backgroundColor = "black";

    const units=[{value:"msq",text:"Metre Sq"},{value:"ac",text:"Acre"},{value:"ftsq",text:"Foot Sq"}];

    function populateoptions(selectid,units){
        let select=document.getElementById(selectid)
        for (let i = 0; i < units.length; i++) {
             if (select.options[i + 1]) { 
                select.options[i + 1].value = units[i].value;
                select.options[i + 1].text = units[i].text;
            }
        }
    }
    populateoptions("user",units);
    populateoptions("output", units);
    
    let convertbtn=document.getElementById("su_button");
    convertbtn.addEventListener("click",function(){
        let input=parseFloat(document.getElementById("fromuser").value);
        let fro=document.getElementById("user").value;
        let to=document.getElementById("output").value;
        let result;
        if (fro==="msq" && to==="ftsq")result=input*10.7639;
        else if(fro==="ftsq" && to==="msq")result=input/10.7639;
        else if(fro==="msq" && to==="ac")result=input*0.000247105;
        else if(fro==="ac" && to==="msq")result=input/0.000247105;
        else if(fro==="ftsq" && to==="ac")result=input*2.2957e-5;
        else if(fro==="ac" && to==="ftsq")result=input/2.2957e-5;
        else if(fro===to)result=input;
        else result="INVALID";

        document.getElementById("touser").value=result;
         document.querySelector(".result").innerHTML=` Result : ${input} ${fro} = ${result} ${to} `
        
    });
});

// for speed

let btn4=document.getElementById("speed");
btn4.addEventListener("click",function(){
   let target2 = document.querySelector(".choose");
    target2.innerHTML = "You Selected Speed. Please select From: and To: (Km/h,mph,m/s).";
    target2.style.backgroundColor = "black";

    const units=[{value:"kmh",text:"Km/h"},{value:"mph",text:"mph"},{value:"ms",text:"m/s"}];

    function populateoptions(selectid,units){
        let select=document.getElementById(selectid)
        for (let i = 0; i < units.length; i++) {
             if (select.options[i + 1]) { 
                select.options[i + 1].value = units[i].value;
                select.options[i + 1].text = units[i].text;
            }
        }
    }
    populateoptions("user",units);
    populateoptions("output", units);
    
    let convertbtn=document.getElementById("su_button");
    convertbtn.addEventListener("click",function(){
        let input=parseFloat(document.getElementById("fromuser").value);
        let fro=document.getElementById("user").value;
        let to=document.getElementById("output").value;
        let result;
       if (fro === "kmh" && to === "ms") result = input * 0.27778;
        else if (fro === "ms" && to === "kmh") result = input / 0.27778;
        else if (fro === "kmh" && to === "mph") result = input * 0.621371;
        else if (fro === "mph" && to === "kmh") result = input / 0.621371;
        else if (fro === "mph" && to === "ms") result = input * 0.44704;
        else if (fro === "ms" && to === "mph") result = input / 0.44704;
        else if (fro === to) result = input;
        else result = "INVALID";

        document.getElementById("touser").value=result;
         document.querySelector(".result").innerHTML=` Result : ${input} ${fro} = ${result} ${to} `;
    });
});

//for temperature 

let btn6=document.getElementById("temperature");
btn6.addEventListener("click",function(){
   let target2 = document.querySelector(".choose");
    target2.innerHTML = "You Selected Temperature. Please select From: and To: (C,F,K).";
    target2.style.backgroundColor = "black";

    const units=[{value:"C",text:"Celsius"},{value:"K",text:"Kelvin"},{value:"F",text:"Fahrenheit"}];

    function populateoptions(selectid,units){
        let select=document.getElementById(selectid)
        for (let i = 0; i < units.length; i++) {
             if (select.options[i + 1]) { 
                select.options[i + 1].value = units[i].value;
                select.options[i + 1].text = units[i].text;
            }
        }
    }
    populateoptions("user",units);
    populateoptions("output", units);
    
    let convertbtn=document.getElementById("su_button");
    convertbtn.addEventListener("click",function(){
        let input=parseFloat(document.getElementById("fromuser").value);
        let fro=document.getElementById("user").value;
        let to=document.getElementById("output").value;
        let result;
       if (fro === "C" && to === "F") result = (input * 9/5) + 32;
        else if(fro === "C" && to === "K") result = input + 273.15;
        else if(fro === "F" && to === "C") result = (input - 32) * 5/9;
        else if(fro === "F" && to === "K") result = ((input - 32) * 5/9) + 273.15;
        else if(fro === "K" && to === "C") result = input - 273.15;
        else if(fro === "K" && to === "F") result = ((input - 273.15) * 9/5) + 32;
        else if(fro === to) result = input;
        else result = "INVALID";

        document.getElementById("touser").value=result;
         document.querySelector(".result").innerHTML=` Result : ${input} ${fro} = ${result} ${to} `;
    });
});







