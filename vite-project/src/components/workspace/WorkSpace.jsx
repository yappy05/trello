import React from 'react';
import Inbox from "./inbox/Inbox.jsx";
import Resible from "./Resible.jsx";
import AllTasks from "./AllTasks.jsx";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import { MdDragIndicator } from "react-icons/md";

const WorkSpace = () => {
    return (
        <div style={styles.container}>
            <PanelGroup direction={'horizontal'} autoSaveId={'example'}>
                <Panel minSize={20}>
                    <Inbox/>
                </Panel>
                <PanelResizeHandle className={'w-px flex justify-center items-center'}>
                    <div className={'z-1 w-6 h-4 flex justify-center items-center bg-gray-200 rounded-sm'}>
                        <MdDragIndicator className={'w-4 h-4'} />
                    </div>
                </PanelResizeHandle>
                <Panel minSize={30}>
                    <AllTasks/>
                </Panel>
            </PanelGroup>
        </div>

    );
};


const styles = {
    container: {
        display: 'flex',

        backgroundColor: 'white',
        height: 'calc(100vh - 80px)',
        border: '1px solid #ccc',
        overflow: 'hidden',

    }
}

export default WorkSpace;
