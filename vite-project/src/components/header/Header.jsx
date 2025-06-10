import React from 'react';
import Search from "./Search.jsx";
import ButtonCreate from "./ButtonCreate.jsx";
import ButtonPremium from "./ButtonPremium.jsx";
import AddtionalIcons from "./AddtionalIcons.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
    return (
        <header style={styles.header}>
            <Logo />
            <span style={{fontWeight: 'bold'}}>Trello</span>
            <Search />
            <ButtonCreate/>
            <ButtonPremium />
            <AddtionalIcons/>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        padding: '5px 0px',
        backgroundColor: 'none'
    }
};

export default Header;