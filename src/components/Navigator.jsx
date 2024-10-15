import React from 'react';
import IconRight from './icons/IconRight';
import IconLeft from './icons/IconLeft';

const Navigator = (props) => {

    const handleClick = () => {
        var target = document.getElementById("selectView");
        var target2 = document.getElementById("lookBook");
        var target3 = document.getElementById("grwm");
        var target4 = document.getElementById("diys");

        target.classList.remove('animate');
        target2.classList.remove('animate');
        target3.classList.remove('animate');
        target4.classList.remove('animate');
    };
    return (
        <div className='xui-d-flex xui-flex-ai-center xui-mt-2'>
            <div onClick={() => handleClick()}>
                <IconLeft />
            </div>
        </div>
    );
};

export default Navigator;