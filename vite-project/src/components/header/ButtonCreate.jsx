import React from 'react';

const ButtonCreate = () => {
    return (
        <div style={styles.button}>
            <p style={styles.button.p}>Создать</p>
            {/*<p style={styles.button.p}>Create</p>*/}
        </div>
    );
};

const styles = {
    button: {
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(at center, rgba(66, 89, 243, 1.0), rgba(36, 83, 233, 1.0))',
        padding: '2px',
        borderRadius: '3px',
        p:{
            padding: '5px 10px',
            margin: '0px',
            color: 'white',
            fontSize: '14px',
        }
    }
};

export default ButtonCreate;