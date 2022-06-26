import React from 'react';
import "./Album.css";
import imagem2 from '../../Img/imagem2.jpeg';
import { ArrowLeft, ArrowRight } from "phosphor-react"


export const Album = () => {

    return (
        <div className='box_teste'>
            <img className='img_album' src={imagem2} alt="Imagem principal" />
            <div className='btn_direction'>
                <button>
                    <ArrowLeft size={32} color="#5f0317" weight="fill" />
                </button>
                <button>
                    <ArrowRight size={32} color="#5f0317" weight="fill" />
                </button>
            </div>
        </div>
    )
}

