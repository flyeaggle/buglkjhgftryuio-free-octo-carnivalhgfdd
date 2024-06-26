
import { useEffect, useState } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import FastSpin from "./Spin/Spin";

export const Confuse = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 2500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.os_webkit_moz_ms_fox'));

    return(<>
        <main>
            {
                d ?
                    <FastSpin />
                :
                    swap
            }
        </main>
    </>)
};