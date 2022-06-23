import { Card } from "../../Components/Card/Card.jsx";
import { Album } from "../../Components/Carousel/Album.jsx";
import "../../GlobalStyle.css";

export function Index() {
    return (
        <section>
            <Album />
            <div className="group">
                <div className="box_card">
                    <Card
                        text="Enviamos sua compra"
                        paragraph="Enviamos para todo o Brasil"
                    />
                    <Card
                        text="Pagamentos"
                        paragraph="Pix, Boleto, Cartão de Crédito e mais"
                    />
                    <Card
                        text="Contato"
                        paragraph="Fale conosco nas redes sociais"
                    />
                </div>
            </div>
        </section>
    )
}

