import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value, setValue] = useState([20, 60])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value[0]}</span>
                <SuperRange
                    value={value[0]}
                    value2={value[1]}
                    setValue={setValue}

                />
            </div>

            <div>
                <span>{value[0]}</span>
                <SuperDoubleRange value={[value[0], value[1]]}
                                  setValue={setValue}


                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
