const dob=document.querySelector("#date-of-birth");
const luckyNo=document.querySelector("#luckyNumber");
const btncheck=document.querySelector("#checkButton");
const outputArea=document.querySelector("#output");

function birthdateSum(bdate){
    var birthdateAsNumber=bdate.replaceAll("-","");
    var sum=0;
    for(let index=0;index<birthdateAsNumber.length;index++){
        sum=sum+Number(birthdateAsNumber.charAt(index));
    }
    return sum;
}

function checkLuckyOrNot(sumofdob){
    const luckyNumber=luckyNo.value;
    if(sumofdob&&luckyNumber){

        if(sumofdob%luckyNumber==0){
            outputArea.innerText="Wohhhh !! You are Lucky 😎";
        }
        else{
            outputArea.innerText="Not Lucky Birthdate Bro 😌";
        }
    }
    else{
        outputArea.innerText="Please enter both the feilds";
    }
}

function onClickCheckButton(){
    // console.log("Click is working");
    const birthdate=dob.value;
    const sumofbirthdate=birthdateSum(birthdate);
    checkLuckyOrNot(sumofbirthdate);
}


btncheck.addEventListener("click",onClickCheckButton);