import ImgProduto from "../../Img/ImgProduto.jpeg";
import "./Artifacts.css";

export function Artifacts() {

    const MyProducts = [
        {
            id: 1,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
        {
            id: 2,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
        {
            id: 3,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
        {
            id: 4,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
        {
            id: 5,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
        {
            id: 6,
            image: ImgProduto,
            title: "Produto Faveleira",
            price: 140
        },
    ]

    return (
        <nav className="navigation_card_itens">
            {MyProducts.map(({ id, image, title, price }) => (
                <ul key={id} className="card_itens">
                    <img src={image} alt="Produto 1" />
                    <div className="box_produto">
                        <div>
                            <li>{title}</li>
                            <li className="line"></li>
                            <li>{price}</li>
                        </div>
                        <button title="adicionar ao carrinho">adicionar ao carr...</button>
                    </div>
                </ul>
            ))}
        </nav>
    )
}