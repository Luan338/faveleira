import "./Footer.css";
import LogoFooter from "../../Img/LogoFooter.png";
import { WhatsappLogo, EnvelopeSimple, InstagramLogo, FacebookLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function Footer() {
    return (
        <footer>
            <section className="wrap_footer">
                <div className="box_logo_footer">
                    <img className="logo_footer" src={LogoFooter} alt="Logo Footer" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="contact_footer">
                    <h4>Fale com a gente</h4>
                    <div>
                        <WhatsappLogo size={27} color="#ffffff" weight="duotone" />
                        <span>(xx)xxxxx-xxxx</span>
                    </div>
                    <div>
                        <EnvelopeSimple size={27} color="#ffffff" weight="duotone" />
                        <span>faveleiraoficial@gmail.com</span>
                    </div>
                </div>
                <div>
                    <h4>Nossas redes</h4>
                    <figure className="figure_socials">
                        <a href="https://www.instagram.com/faveleiraa/" target="_blank" title="Faveleira Instagram">
                            <InstagramLogo size={32} color="#ffffff" weight="fill" />
                        </a>
                        <a href="https://www.facebook.com/faveleiraa" target="_blank" title="Faveleira Facebook">
                            <FacebookLogo size={32} color="#ffffff" weight="fill" />
                        </a>
                        <a href="https://www.linkedin.com/company/faveleira/" target="_blank" title="Faveleira Linkedin">
                            <LinkedinLogo size={32} color="#ffffff" weight="fill" />
                        </a>
                        <a href="https://twitter.com/Faveleiraa" target="_blank" title="Faveleira Twitter">
                            <TwitterLogo size={32} color="#ffffff" weight="fill" />
                        </a>
                    </figure>
                </div>
            </section>
        </footer>
    )
}