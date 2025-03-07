import React, { useState } from 'react'
import './UpperFragment.css'
import Background from "./check_box/Background.jsx";
import Logo from "./check_box/Logo.jsx";
import SwitchBox from "./check_box/SwitchBox.jsx";


function UpperFragment() {
    const [count, setCount] = useState(0)

    return (
    <>
        <Background/>
        <div className="fragment-container">
            <div className="logo-container">
                <Logo/>
            </div>
            <div className="vizitka-container">
                Тут берется визитка
            </div>
            <div className="switch-container">
                <SwitchBox/>
            </div>
        </div>






    </>
    )
}

export default UpperFragment
