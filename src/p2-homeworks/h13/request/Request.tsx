import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {loadingAC} from "../../h10/bll/loadingReducer";
import {Hw13API} from "./api";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import preloader from "./../../h10/preloader/preloader.gif";


function Request() {
    let [isChecked, setIsChecked] = useState(false)
    let [message, setMessage] = useState<string>('')
    let [err, setErr] = useState<boolean>(false)

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType>(state => state.loading.loading)
    let handler = () => {
        dispatch(loadingAC())
        Hw13API.request(isChecked)

            .then((res) => {
                setErr(false)
                setMessage(res.data.errorText)
            })
            .catch((err) => {
                setErr(true)
                setMessage(err.response.data.errorText)
            })
            .finally(() => {
                dispatch(loadingAC())
            })
    }


    return (

        <div>

            <div><SuperCheckbox onChange={() => setIsChecked(!isChecked)} checked={isChecked}/>Checkbox</div>
            <div><SuperButton onClick={handler} name={"Button"} error={''}>Button</SuperButton></div>
            <div> {loading ? <img src={preloader}/> : ''}</div>

            <div style={err ? {color: "darkred"} : {color: "lightgreen"}}>{message} </div>

        </div>
    );
}

export default Request;
