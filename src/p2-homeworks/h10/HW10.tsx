import React from "react";
import { Loading } from "../../utils/Loading/Loading";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function HW10() {
    // useSelector, useDispatch
    const loading = false;

    const setLoading = () => {
        // dispatch
        // setTimeout
        console.log("loading...");
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Loading />
                ) : (
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
