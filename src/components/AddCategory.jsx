import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {//{ setCategories }
    const [inputValue, setinputValue] = useState('');
    const onInputChange = (event) => {
        // Obtener nuevo valor
        setinputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);


        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        // <form onSubmit={(event) =>onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar Gif'
                value={inputValue}
                // onChange={onInputChange}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
