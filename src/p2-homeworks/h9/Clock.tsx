import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css'

function Clock() {


let DATA=new Date()
    const [timerId, setTimerId] = useState<number>();
    const [date, setDate] = useState<Date>(DATA);
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId);

    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    let Hour =  date.getHours();
    let Minutes =  date.getMinutes();
    let Seconds =  date.getSeconds();
    let Year =  date.getFullYear();
    let  Month =  date.getMonth()+1;
    let Day =   date.getDate();


    let toDay=( Day + " " + Month + " " + Year);
    let stringTime = `${Hour>9?Hour:"0"+Hour }:${Minutes>9?Minutes:"0"+Minutes }:${Seconds>9?Seconds:"0"+Seconds }`; // fix with date
    let stringDate=toDay ; // fix with date

    return (
        <div>
            <div className={s.clock}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.data} >
                    {stringDate}
                </div>
            )}

            <SuperButton error={""} onClick={start}>start</SuperButton>
            <SuperButton error={""} onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
