import React from 'react';
import TopBar from "./TopBar.jsx";
import InboxTodo from "./InboxTodo.jsx";






const Inbox = () => {


    const [onMouseEnter, setOnMouseEnter] = React.useState(false);


    return (
        <div style={styles.container} onMouseEnter={() => setOnMouseEnter(true)} onMouseLeave={() => setOnMouseEnter(false)}>
            <TopBar onMouseEnter={onMouseEnter}/>
            <InboxTodo/>

        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        minWidth: '280px',
        // minWidth: '280px',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        flexShrink: 0
    }
}

export default Inbox;