function getZodiac(){
    const dob = document.getElementById("dob").value;

    if(!dob){
        alert("Please select your date of birth");
        return;
    }

    const date = new Date(dob);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    let sign = "";
    let message = "";

    if((month==3 && day>=21) || (month==4 && day<=19)){
        sign = "Aries";
        message = "You are energetic and confident!";
    }
    else if((month==4 && day>=20) || (month==5 && day<=20)){
        sign = "Taurus";
        message = "You are strong and reliable!";
    }
    else if((month==5 && day>=21) || (month==6 && day<=20)){
        sign = "Gemini";
        message = "You are smart and curious!";
    }
    else if((month==6 && day>=21) || (month==7 && day<=22)){
        sign = "Cancer";
        message = "You are emotional and caring!";
    }
    else if((month==7 && day>=23) || (month==8 && day<=22)){
        sign = "Leo";
        message = "You are a natural leader!";
    }
    else if((month==8 && day>=23) || (month==9 && day<=22)){
        sign = "Virgo";
        message = "You are practical and intelligent!";
    }
    else if((month==9 && day>=23) || (month==10 && day<=22)){
        sign = "Libra";
        message = "You love balance and peace!";
    }
    else if((month==10 && day>=23) || (month==11 && day<=21)){
        sign = "Scorpio";
        message = "You are passionate and brave!";
    }
    else if((month==11 && day>=22) || (month==12 && day<=21)){
        sign = "Sagittarius";
        message = "You love adventure!";
    }
    else if((month==12 && day>=22) || (month==1 && day<=19)){
        sign = "Capricorn";
        message = "You are disciplined and hardworking!";
    }
    else if((month==1 && day>=20) || (month==2 && day<=18)){
        sign = "Aquarius";
        message = "You are creative and unique!";
    }
    else{
        sign = "Pisces";
        message = "You are kind and artistic!";
    }

    document.getElementById("result").innerText = "Your Zodiac Sign: " + sign;
    document.getElementById("prediction").innerText = message;
}