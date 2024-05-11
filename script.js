let form=document.querySelector("form")
let apikey="132e50cf612a7f70476e443e71a25c0f"
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let city=document.getElementById("city").value()
    let getDetails=async()=>{
        let output1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        let output2=await output1.json()

        let degree=Math.round(output2.main.temp-273)
        let humidvalue=Math.round(output2.main.humidity)
        let desc=output2.weather[0].main 

        let temp=document.querySelector("#temp_value")
        let humid=document.querySelector("#humid_value")
        let h3=document.querySelector("h3")
        temp.innerHTML=`
        <p>${degree}<sup>0</sup>C</p>
        `
        humid.innerHTML=`
        <p>${humidvalue} kmph</p>
        `
        h3.innerHTML=desc 

    }
    getDetails()
})