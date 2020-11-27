import React from "react";
import s from "./App.module.css";

import HW5 from "../../../p2-homeworks/h5/HW5";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
;

function App() {
    const background=useSelector<AppStoreType,string>(state =>state.changeTheme.background)
    return (
        <div className={s[background]}>
            <div>react homeworks:</div>
            <HW5/>
           {/* <HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}


        </div>
    );
}

export default App;
