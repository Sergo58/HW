import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    let Data = new Date();
    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    let Seconds = Data.getSeconds();
let time=("Текущее время: " + Hour + ":" + Minutes + ":" + Seconds)


    const [timerId, setTimerId] = useState<number>();
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(date)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
    };
    const onMouseLeave = () => {
        // close
    };

    const stringTime = time; // fix with date
    const stringDate = Data; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton error={""} onClick={start}>start</SuperButton>
            <SuperButton error={""} onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
