import React from 'react';
import { GoSearch } from "react-icons/go";

const Search = () => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <div style={{...styles.searchBlock, ...(isFocused && styles.searchBlockFocus)}}>
            <div style={styles.inputWrapper}>
                <GoSearch style={styles.searchIcon}/>
                <input 
                    type={'text'} 
                    placeholder={!isFocused? 'Search': 'Search Trello'}
                    style={styles.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    );
};

const styles = {
    searchBlock: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '3px',
        width: '100%',
        padding: '5px 10px',
        border: '1px solid #ccc',
        transition: 'all 0.2s ease-in-out',
    },
    searchBlockFocus:{
        border: '1px solid #0052cc',
       boxShadow: '0px 0px 49px -5px rgba(29, 44, 56, 0.17)'
    },
    inputWrapper: {
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    searchIcon: {
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#666',
    },
    input: {
        width: '100%',
        paddingLeft: '35px', // место для иконки
        border: 'none',
        outline: 'none',
        fontSize: '14px',
    }
}

export default Search;