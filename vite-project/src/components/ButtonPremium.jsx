import React from 'react';
import { BsStars } from "react-icons/bs";

const ButtonPremium = () => {
    return (
        <div style={styles.button}>
            <BsStars style={styles.searchIcon}/>
            <p style={styles.button.p}>Осталось дней: 7</p>
            {/*<p style={styles.button.p}>Create</p>*/}
        </div>
    );
};

const styles = {
    button: {
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(90deg, rgba(157, 144, 202, 1.0), rgba(22, 69, 218, 1.0))',
        padding: '2px',
        borderRadius: '3px',
        marginLeft: '50px',
        p:{
            display: 'inline',
            padding: '5px 10px',
            margin: '0px',
            color: 'white',
            fontSize: '14px',
            whiteSpace: 'nowrap',
        }
    },
    searchIcon: {
        color: 'white',
        marginLeft: '10px',
    },
};

export default ButtonPremium