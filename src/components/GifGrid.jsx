// import { getGifts } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

//useEffect - Efecto secundario - disparar cuando uno quiere un efecto
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // //ES CONVENIENTE PARA TODO ESTO USAR UN CUSTOM HOOK
    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifts(category);
    //     setImages(newImages)
    // }
    // useEffect(() => { //No puede ser funcion asincrona
    //     getImages();
    // }, []);//Si el arreglo se queda vacio solo se ejecuta al inicio de renderizacion del componente

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2 className="">Cargando...</h2>)
            }
            {/* {
                isLoading
                    ? (<h2 className="">Cargando...</h2>)
                    : null
            } */}
            <div className="card-grid">
                {
                    images.map((imagen) => (
                        <GifItem
                            key={imagen.id}
                            {...imagen}
                        // imagen={imagen}
                        />
                    ))
                }
            </div>
        </>
    )
}
// {categories.map((category, i) => ( //Se puede usar sin return
{/* <div key={category}> */ }
{/* <GifGrid key={category} category={category} /> */ }
{/* </div> */ }
// ))}
