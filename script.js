dailyPlannerText = JSON.parse(localStorage.getItem("planner"));
console.log(dailyPlannerText);
if(dailyPlannerText === null)
{
    dailyPlannerText = [];
}




function initializeInputColors()
{
    let timeBlock = document.querySelectorAll(".input");
    const hour = parseInt(moment().format('HH'));
    for (let i = 0; i < timeBlock.length; i++) {
        const dataTime = parseInt(timeBlock[i].getAttribute("data-time"));
        for (let t = 0; t < dailyPlannerText.length; t++) {
            if(dataTime === parseInt(dailyPlannerText[t].dataTime))
            {
                timeBlock[i].value = dailyPlannerText[t].text;
            }
        }
        if(dataTime === hour)
        {
            timeBlock[i].style.backgroundColor = "red";
        }else if(dataTime > hour)
        {
            timeBlock[i].style.backgroundColor = "green";
        }else
        {
            timeBlock[i].style.backgroundColor = "lightgrey";
        }
    }
}
function savePlanner()
{
  localStorage.setItem("planner",JSON.stringify(dailyPlannerText));
}
document.addEventListener("click", function(obj){
    obj.preventDefault()

    if(obj.target.className === "save")
    {
        const time = obj.target.previousElementSibling.getAttribute("data-time");
        const text = obj.target.previousElementSibling.value;
        console.log(time + text);
    
    
        for (let i = 0; i < dailyPlannerText.length; i++) {
            if(dailyPlannerText[i].dataTime === time)
            {
                dailyPlannerText[i].text = text;
                savePlanner();
                console.log(dailyPlannerText);
                return;
            }       
        }
        dailyPlannerText.push({dataTime : time, text : text});
        savePlanner();
        console.log(dailyPlannerText); 
    }
})

 initializeInputColors();
 