import Logo from "../../Img/logo.png";
import "./Header.css";
import { User, PhoneCall, ShoppingCart, CaretDown } from "phosphor-react";
import { SellerLink } from "../NavItens/SellerLink/SellerLink";

export function Header() {

    return (
        <>
            <header className='container_header'>
                <section className='container_navigation'>
                    <img className='logo' src={Logo} alt="Logo - Faveleira" />
                    <form className='form_input'>
                        <input
                            type="text"
                            placeholder='  O que você procura , cria?'
                            className='input_search'
                        />
                    </form>
                    <nav className='navigation'>
                        <ul>
                            <li className='box_list'>
                                <PhoneCall size={27} color="#ffffff" className='icon' alt="contact" />
                                <span>Atendimento</span>
                            </li>
                            <li className='box_list'>
                                <User size={27} color="#ffffff" className='icon' alt="User" />
                                <span>Minha conta</span>
                            </li>
                            <li>
                                <ShoppingCart size={27} color="#ffffff" alt="Shopping Cart" />
                                <span>Meu carrinho</span>
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
                        <li className='box_collabs'>
                            Collabs
                            <CaretDown size={20} color="#ffffff" className="icon" />
                        </li>
                        <li>Ajude a gente a continuar!</li>
                        <li>Trocas e devoluções</li>
                        <li>Politica de privacidade</li>
                        <li></li>
                    </ul>
                </nav>
            </section>
            <SellerLink />
        </>
    )
}

