import React from 'react';
import './footer.css';
import urflexLogo from '../../assets/urflex_logo.png';
import emailImg from '../../assets/email.png';
import instagramImg from '../../assets/instagram.png';
import linkedinImg from '../../assets/linkedin.png';

function Footer() {

    const apiRequest = '';

    const submit = async (e) => {
        e.preventDefault();
        
    };

    return (
        <section className="footer">
            <p className="p">Insira seu E-mail para ficar por dentro das principais novidades da Urflex!</p>
            <form className="email-container" onSubmit={submit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Insira seu melhor E-mail"/>
                <button type="submit">Enviar</button>
            </form>
            <div className="social">
                <a href="mailto:urflex.app@gmail.com">
                    <img src={emailImg} alt="email" />
                </a>

                <a href="https://www.instagram.com/urflexbeneficios">
                    <img src={instagramImg} alt="instagram" width="50px" />
                </a>

                <a href="https://www.linkedin.com/company/urflex-beneficios-corporativos">
                    <img src={linkedinImg} alt="linkedin" width="50px" />
                </a>
            </div>

            <div className="copyright">
                <img src={urflexLogo} alt="" width="50px" />
                <div>
                    <p>Urflex all rights reserved.</p>
                    <p>Urflex Benefícios Corporativos</p>
                </div>
            </div>

        </section>
    );
}

export default Footer;
