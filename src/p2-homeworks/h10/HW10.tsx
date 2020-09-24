import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../utils/Loading/Loading";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";
import s from './HW10.module.scss'

function HW10() {
    const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading)
    const dispatch = useDispatch()
    // const loading = false;

    const setLoading = () => {
        dispatch(loadingAC(true))
        window.setTimeout(() => {
            dispatch(loadingAC(false))
        }, 5000)
        console.log("loading...");
    };

    return (
        <div className={s.hw10}>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {
                isLoading
                    ?
                    (
                        <div className={s.hw10__loading}>
                            <Loading size={20} />
                        </div>
                    )
                    : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
            }
            {/* <Loading /> */}
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    );
}

export default React.memo(HW10);
