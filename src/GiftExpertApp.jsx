import React, { useState } from 'react'
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Superman']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setcategories(cat => [...categories, 'Spider-man'] );
    }

    return (
        <>
            {/* Titulo */}
            <h1>GiftExpertApp</h1>

            {/* input */}
            <AddCategory
                // onNewCategory={event => onAddCategory(event)}
                onNewCategory={onAddCategory}
            // setCategories={setCategories} //Forma de enviar la funcion de agregar categoria
            />

            {/* 8tdS3utsyizdNdyMLU3hGhDbJquuT90f */}

            {/* Listado */}
            {categories.map((category, i) => ( //Se puede usar sin return
                <div key={category}>
                    <GifGrid key={category} category={category} />
                </div>
            ))}

        </>
    )
}
// rafc -- abreviacion para crear el componente rapidamente