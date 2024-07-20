import React, { useState } from 'react';
import DaniloImg from '../../assets/1.jpeg'
import GustavoImg from '../../assets/2.jpeg'
import RayImg from '../../assets/3.jpeg'
import HenriqueImg from '../../assets/4.jpeg'
import FernandaImg from '../../assets/5.jpeg'
import YasminImg from '../../assets/8.jpeg'
import BeatrizImg from '../../assets/6.jpeg'
import CristianoImg from '../../assets/7.jpeg'
import MarinaImg from '../../assets/9.jpeg'
import PersonCard from '../Team/PersonCard';
import { TeamStyled, ButtonGroup, ButtonStyled, PersonContainer } from './styles';

function Team() {
    const [selected, setSelected] = useState('leadership');

    const toggleTo = (value) => {
        setSelected(value);
    };
    return <TeamStyled>
        <ButtonGroup>
            <ButtonStyled className={selected === 'leadership' ? 'selected' : ''} onClick={() => toggleTo('leadership')}>Liderança</ButtonStyled>
            <ButtonStyled className={selected === 'growth' ? 'selected' : ''} onClick={() => toggleTo('growth')}>Growth</ButtonStyled>
            <ButtonStyled className={selected === 'tech' ? 'selected' : ''} onClick={() => toggleTo('tech')}>Tech</ButtonStyled>
        </ButtonGroup>

        <PersonContainer className={selected === 'leadership' ? 'selected' : ''}>
            <PersonCard
                imageUrl={DaniloImg}
                name={'Danilo Veloso'}
                role={'CEO'}
                description={'Graduando em <strong>Ciências Contábeis</strong> na UFC, é apaixonado por inovação e criação de novos negócios. Como <strong>CEO</strong> da Urflex, ele é responsável pela <strong>gestão</strong>, <strong>vendas</strong>, <strong>finanças</strong>, <strong>liderança</strong> e <strong>comunicação</strong> com parceiros.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={GustavoImg}
                name={'Gustavo Fernandes'}
                role={'CTO'}
                description={'Estudante de <strong>Ciência da Computação</strong> na UFC de Quixadá, é o <strong>CTO</strong> da Urflex Benefícios Corporativos. Como <strong>CTO</strong>, ele lidera o setor de tecnologia, tomando as melhores decisões e desenvolvendo soluções com sua equipe.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={RayImg}
                name={'Ray Teixeira'}
                role={'CMO'}
                description={'Graduando em <strong>Redes de Computadores</strong> e <strong>líder de comunidades de startups</strong>, atua como <strong>CMO</strong> da Urflex. É responsável pela <strong>coordenação geral</strong> das ações de <strong>marketing</strong> da empresa, visando a <strong>captação e fidelização de clientes</strong>, bem como a entrega de valor de marca para o mercado.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={HenriqueImg}
                name={'Henrique Silva'}
                role={'Orientador'}
                description={'<strong>Professor Associado I</strong> e <strong>Coordenador</strong> do Curso de Graduação em <strong>Sistemas e Mídias Digitais</strong> na UFC, ministra disciplinas de informática na educação, gestão de projetos, gestão de negócios e empreendedorismo. Na Urflex, atua como <strong>Professor Orientador</strong> e <strong>Consultor</strong>.'}
            >
            </PersonCard>
        </PersonContainer>

        <PersonContainer className={selected === 'growth' ? 'selected' : ''}>

            <PersonCard
                imageUrl={FernandaImg}
                name={'Fernanda Romão'}
                role={'Analista de Marketing'}
                description={'Estudante de <strong>Farmácia</strong> na UFC,  apaixonada por inovação. Como <strong>Analista de Marketing</strong> da Urflex, é responsável pela <strong>análise de indicadores</strong> da área de <strong>marketing</strong>, <strong>suporte</strong> em <strong>design</strong> de marca, <strong>gestão de redes sociais</strong> e demais atividades.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={YasminImg}
                name={'Yasmin Lima'}
                role={'Analista de Marketing'}
                description={'Graduanda em <strong>Engenharia de Computação</strong> na UFC e apaixonada por tecnologia. Na Urflex, atua como <strong>desenvolvedora fullstack</strong> e <strong>Analista de Marketing</strong>. É responsável por ajudar nas demandas de <strong>Growth</strong>.'}
            >
            </PersonCard>
        </PersonContainer>

        <PersonContainer className={selected === 'tech' ? 'selected' : ''}>
            <PersonCard
                imageUrl={BeatrizImg}
                name={'Beatriz Fernandes'}
                role={'Desenvolvedora de software'}
                description={'Estudante de <strong>Engenharia de Software</strong> na UFC. Atua como <strong>desenvolvedora fullstack</strong> da Urflex, é responsável por auxiliar no desenvolvimento do sistema e demais necessidades da empresa.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={CristianoImg}
                name={'Cristiano Mendes'}
                role={'Desenvolvedor de software'}
                description={'Estudante de <strong>Engenharia de Software</strong> na UFC de Quixadá. Atua com <strong>desenvolvimento fullstack</strong>, garantindo uma experiência e usabilidade fácil e eficiente para os usuários e administradores dos sistemas.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={MarinaImg}
                name={'Marina Paula'}
                role={'Designer'}
                description={'Estudante do 5º semestre de <strong>Engenharia de Computação</strong>. Entusiasta da tecnologia e apaixonada por filmes e livros em seu tempo livre, atua na Urflex como <strong>designer</strong> e <strong>desenvolvedora fullstack</strong>.'}
            >
            </PersonCard>
            <PersonCard
                imageUrl={YasminImg}
                name={'Yasmin Lima'}
                role={'Desenvolvedora de software'}
                description={
                    'Graduanda em <strong>Engenharia de Computação</strong> na UFC e apaixonada por tecnologia. Na Urflex, atua como <strong>desenvolvedora fullstack</strong> e <strong>Analista de Marketing</strong>. É responsável por auxiliar no desenvolvimento do sistema.'
                }
            >
            </PersonCard>
        </PersonContainer>
    </TeamStyled>
}
export default Team;