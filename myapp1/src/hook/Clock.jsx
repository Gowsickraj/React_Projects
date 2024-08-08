import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {

    const [date, setDate] = useState(new Date());

    // console.log(date.getHours());

    setInterval(() => setDate(new Date(), 1000),)

    let meridian = 'am';

    if (date.getHours() > 12) {
        meridian = 'pm';

    }
    function setTimeAlarm() {
        const time = [14, 53];
        const now = new Date();
        let currHour = now.getHours();
        let currMin = now.getMinutes();
        if (currHour === time[0] && currMin === time[1]) {

            // window.alert("Alarm");

        }
        // console.log(currHour);
        // console.log(currMin);
    }
    // setInterval(setTimeAlarm(), 1000);

    const[alarmTime,setAlarmTime] = useState([]);


    function handleTime(e) {

        const now = new Date();
        let currHour = now.getHours();
        let currMin = now.getMinutes();

        const time = e.target.value;
        const [hours, mins] = time.split(":");
        setAlarmTime((prevState)=>{

            const newState = [...prevState];
            newState.push(mins);
            return newState;

        });
        console.log(hours, "hours", mins, "mins");
        console.log(alarmTime,"Alarm time state");

        


        if (currMin < 10) {
            currMin = "0" + currMin;
        }

        console.log(currMin, "currmin");

        // if(hours === currHour && mins === currMin){
        //     window.alert("Alarm");
        // }

        // if(hours === currHour){
        //     window.alert("Alarm");
        // }

        // if (currMin == mins) {
        //     window.alert("Alarm");
        // }
    }

    const useLocalStorage = (e)=>{
        const{name,value} = e.target;
        localStorage.setItem("timings",value);
        let alarmTimings = localStorage.getItem("timings");

        const now = new Date();
        let currHour = now.getHours();
        let currMin = now.getMinutes();

        let alarmTime;

        alarmTimings.map((item)=>({
            alarmTime = item
            
        }))

        
    }

    localStorage.setItem("AlarmTimings",alarmTime);

    // const localItem = localStorage.getItem("AlarmTimings");
    // console.log(localItem,"localitem");


    return (

        <div className='app'>

            <p> <b>Time:</b> {date.toLocaleTimeString()} </p>
            <p> <b>Date:</b> {date.toLocaleDateString()}</p>
            <p>{`Time : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()} ${meridian}`}</p>
            Time<input type='time' onChange={useLocalStorage}></input>

        </div>
    )
}

export default Clock
