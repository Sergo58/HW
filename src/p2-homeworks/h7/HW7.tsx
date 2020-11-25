import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";

import s from "./common/c5-SuperSelect/SuperSelect.module.css"
import {SuperRadio} from "./common/c6-SuperRadio/SuperRadio";


const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div>
            <hr/>
            homeworks 7
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            {/*should work (должно работать)*/}
            <div>

                <SuperSelect className={s.SuperSelect}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />

            </div>



            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    );
}

export default HW7;
