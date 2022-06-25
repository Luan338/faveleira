import { Artifacts } from "../../Components/Artifacts/Artifacts.jsx";
import { Album } from "../../Components/Carousel/Album.jsx";
import "../../GlobalStyle.css";
import delivery from "../../Img/entrega.png";
import payment from "../../Img/pagamento.png";
import contact from "../../Img/whatsapp.png";

export function Index() {
    return (
        <section>
            <Album />
            <div className="group">
                <div className="box_card">
                    <div className='group_card'>
                        <img src={delivery} alt="Entrega" />
                        <div>
                            <strong>Enviamos sua compra</strong>
                            <p>Enviamos para todo o Brasil</p>
                        </div>
                    </div>
                    <div className='group_card_diference'>
                        <img src={payment} alt="Pagamento" />
                        <div>
                            <strong>Pagamentos</strong>
                            <p>Pix, Boleto, Cartão de Crédito e mais</p>
                        </div>
                    </div>
                    <div className='group_card'>
                        <img src={contact} alt="Entrega" />
                        <div>
                            <strong>Contato</strong>
                            <p>Fale conosco nas redes sociais</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Artifacts />
            </div>
        </section>
    )
}

