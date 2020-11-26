import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./preloader/preloader.gif"

function HW10() {

     const loading=useSelector<AppStoreType>(state =>state.loading.loading )

    let dispatch=useDispatch()


    const setLoading = () => {
        dispatch(loadingAC())

        setTimeout(()=>{dispatch(loadingAC())

        }, 2000)

    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} /></div>
                ) : (
                    <div>
                        <SuperButton error={''} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
