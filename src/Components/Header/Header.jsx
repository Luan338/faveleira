import Logo from "../../Img/logo.png";
import "./Header.css";
import { User, Headset, Heart, CaretDown, ShoppingBag } from "phosphor-react";
import { SellerLink } from "../NavItens/SellerLink/SellerLink";
import { useState } from "react";

export function Header() {

    const [seller, setSellet] = useState(false);
    const [openmodal, setModal] = useState(false);

    return (
        <>
            <header className='container_header'>
                <section className='container_navigation'>
                    <a href="#">
                        <img className='logo' src={Logo} alt="Logo - Faveleira" />
                    </a>
                    <form className='form_input'>
                        <input
                            type="text"
                            placeholder='  O que você procura , cria?'
                            className='input_search'
                        />
                    </form>
                    <nav className='navigation'>
                        <ul>
                            <li>
                                <User size={25} color="#ffffff" className='icon' alt="User" />
                            </li>
                            <li className="shopping">
                                <ShoppingBag size={25} color="#ffffff" />
                                <span>0</span>
                            </li>
                            <li className="heart">
                                <Heart size={25} color="#ffffff" />
                                <span>0</span>
                            </li>
                            <li className='box_list' onClick={() => { setModal(true) }}>
                                <Headset size={25} color="#ffffff" />
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
            <section className='box_navigation'>
                <nav>
                    <ul>
                        <li>Início</li>
                        <li>Quem somos?</li>
                        <li className='box_collabs' onMouseOver={() => { setSellet(!seller) }}>
                            Collabs
                            <CaretDown size={20} color="#ffffff" className="icon" />
                        </li>
                        {seller && (
                            <SellerLink />
                        )
                        }
                        <li>Ajude a gente a continuar!</li>
                        <li>Trocas e devoluções</li>
                        <li>Politica de privacidade</li>
                    </ul>
                </nav>
            </section>
            <section className="box_slide">
                {openmodal && (
                    <section className="wrap_slide">
                        <div className="container_slide">
                            <button className="exit_slide" onClick={() => { setModal(false) }}>X</button>
                            <div className="group_attendance">
                                <h2>Atendimento</h2>
                            </div>
                            <div>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                                <div></div>
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </>
    )
}

