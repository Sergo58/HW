import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

import {changeBackground, changeThemeC} from "./bll/themeReducer";


const themes = ['dark', 'red', 'green', 'black', 'aqua', 'olivedrab'];
const backgroundThemes = ['default', 'basket', 'blue', 'radial', 'grinBlue']

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.changeTheme.theme)
    const background = useSelector<AppStoreType, string>(state => state.changeTheme.background)

    let dispatch = useDispatch()

    const onChangeCallback = (e: string) => {
        dispatch(changeThemeC(e))
    };

    const onChangeCallbackBackground = (e: string) => {
        dispatch(changeBackground(e))
    };


    return (

        <div className={s[theme]}>

            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <hr/>
            <span className={s[theme + '-text']}>
                Change color scheme
            </span>
            <div>

                <SuperSelect value={theme} onChangeOption={onChangeCallback} className={s.SuperSelect}
                             options={themes}/>
            </div>

            <span className={s[theme + '-text']}>
                Change background
            </span>
            <div>

                <SuperSelect value={background} onChangeOption={onChangeCallbackBackground} className={s.SuperSelect}
                             options={backgroundThemes}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;



