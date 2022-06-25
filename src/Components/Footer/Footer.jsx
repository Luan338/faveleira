import "./Footer.css";
import LogoFooter from "../../Img/LogoFooter.png";

export function Footer() {
    return (
        <footer>
            <section className="wrap_footer">
                <div className="box_logo_footer">
                    <img className="logo_footer" src={LogoFooter} alt="Logo Footer" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div>
                    <h4>Fale com a gente</h4>
                </div>
                <div>teste3</div>
            </section>
        </footer>
    )
}