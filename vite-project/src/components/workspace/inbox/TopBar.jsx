import React from 'react';
import { MdOutlineForwardToInbox } from "react-icons/md";
import { LuShare } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const TopBar = (props) => {
    const [hoveredIconIndex, setHoveredIconIndex] = React.useState(null);

    const icons = [
        { Icon: LuShare },
        { Icon: IoFilter },
        { Icon: BsThreeDots }
    ];

    return (
        <div style={styles.container}>
            <MdOutlineForwardToInbox size={'1em'} style={{marginRight: '10px'}}/>
            <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>Inbox</span>
            <div className={'icons'} style={{...styles.icons, cursor: 'pointer', transition: '0.8s', opacity: props.onMouseEnter ? 1 : 0}}>
                {icons.map((iconObj, index) => (
                    <div 
                        key={index}
                        style={{
                            ...styles.icon, 
                            background: hoveredIconIndex === index ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
                        }}
                        onMouseEnter={() => setHoveredIconIndex(index)}
                        onMouseLeave={() => setHoveredIconIndex(null)}
                    >
                        <iconObj.Icon size={'1em'}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, rgb(249, 254, 255) 33%, rgb(238, 248, 251))',
        padding: '18px 10px',
    },
    icons: {
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        borderRadius: '3px',
        transition: 'background 0.1s'
    }
}

export default TopBar;