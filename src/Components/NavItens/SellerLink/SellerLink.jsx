import "./SellerLink.css";
import { ProductList } from "../ProductList/ProductList.jsx";
import { useState } from "react";
import { CaretRight } from "phosphor-react";

export function SellerLink() {
    // NAVEGAÇÃO PARA O ITENS
    const NavItens = [
        {
            id: 1,
            text: "Meu atelie By Rafa",
        }
    ];

    const [product, setProduct] = useState(false);

    return (
        <nav className="nav_seller">
            <ul>
                {NavItens.map(({ id, text }) => (
                    <li
                        key={id} onMouseOver={() => { setProduct(!product) }}>
                        {text}<CaretRight size={23} color="#ffffff" weight="fill" />
                    </li>
                ))}
            </ul>
            {product && (
                <ProductList />
            )}
        </nav>
    )
}