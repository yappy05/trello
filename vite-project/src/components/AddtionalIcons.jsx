import React from 'react';
import { CiShare1 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiAccountPinCircleFill } from "react-icons/ri";
const AddtionalIcons = () => {
    return (
        <div style={styles.container}>
            <CiShare1 size={'1.35em'}/>
            <IoIosNotificationsOutline size={'1.35em'}/>
            <AiOutlineQuestionCircle size={'1.35em'}/>
            <RiAccountPinCircleFill size={'1.8em'} color={'orange'}/>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '5px',
        marginLeft: '10px',
    }
}

export default AddtionalIcons;