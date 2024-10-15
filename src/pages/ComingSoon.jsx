import React from 'react';
import { UndrawDesigner } from 'react-undraw-illustrations';

const ComingSoon = () => {
    return (
        <section className='xui-lg-py-3 xui-py-1 xui-container coming-soon'>
            <div>
                <UndrawDesigner height="250px" skinColor="brown" hairColor="#222" />
                <h1 className='xui-lg-font-sz-300 xui-font-sz-200 xui-text-center xui-mx-auto xui-font-w-700'>Coming Soon...</h1>
            </div>
        </section>
    );
};

export default ComingSoon;