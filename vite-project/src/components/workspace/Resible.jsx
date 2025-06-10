import React from 'react';
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";

const Resible = () => {
    return (
        <PanelGroup direction={'horizontal'} autoSaveId={'example'} className={'mt-16 min-h-60 rounded-lg bordered'}>
            <Panel defaultSize={25}>
                <div className={'flex justify-center items-center p-30 bg-red-100'}>
                    <span>block1</span>
                </div>
            </Panel>
            <PanelResizeHandle className={'flex justify-center items-center w-px bg-white'}/>
            <Panel>
                <div className={'flex justify-center items-center p-30 bg-red-100'}>
                    <span>block2</span>
                </div>
            </Panel>
        </PanelGroup>
    );
};

export default Resible;
