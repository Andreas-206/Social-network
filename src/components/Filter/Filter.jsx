import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setQuery(value);
        dispatch(setFilter(value));
    }

    return (
        <div className={styles.search}>
            <div className={styles.searchWrapper}>
                <CiSearch className={styles.searchIcon} />

                <input
                    className={styles.searchInput}
                    type="text"
                    id="search"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search something.."
                />
            </div>
        </div>
    );
};
