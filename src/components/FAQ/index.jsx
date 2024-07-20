import React from 'react';
import QuestionCard from './FAQCard';
import Plans from '../../assets/plans.png';
import { FAQContainerStyled, TitleStyled } from './styles';

function FAQContainer() {
    return (
        <FAQContainerStyled>
            <TitleStyled>Dúvidas frequentes</TitleStyled>
            <QuestionCard
                question="O que é a Urflex Benefícios Corporativos?"
                answer="A Urflex é uma fintech de atividades de serviços financeiros 
                        focada em ajudar empresas a fomentar uma experiência única na 
                        locomoção diária dos seus funcionário que precisam chegar ao 
                        seu trabalho presencial. Sabemos que o trajeto feito pelo 
                        funcionário diariamente impacta significativamente na sua 
                        produtividade, engajamento e motivação, bem como na sua 
                        saúde mental no curto e longo prazo. Por isso, pensando em 
                        trazer mais agilidade, melhor logística de tempo, facilidade à vida 
                        dos colaboradores, mais produtividade às empresas e consequentemente 
                        melhorar o Employer branding das empresas, surgiu a Urflex Benefícios 
                        Corporativos para inovar na maneira como os colaboradores chegam ao seu trabalho."
            />
            <QuestionCard
                question="Qual problema a Urflex resolve?"
                answer="A Urflex hoje se propõe a resolver o problema da dificuldade diária 
                que os funcionários de MPEs e grandes empresas possuem em se locomoverem de 
                forma segura, confortável, rápida e econômica entre suas residências e o local de trabalho."
            />
            <QuestionCard
                question="Quais são as soluções da Urflex?"
                answer={`A Urflex está desenvolvendo o cartão Urflex Mobilidade, que será adquirido por Empresas 
                de Capital Aberto e Fechado que possuem colaboradores que precisam se locomover diariamente entre 
                suas residências e o local de trabalho, seja em meio de transporte próprio ou de terceiros. Esse 
                cartão possuirá bandeira Visa internacional e aplicativo para visualização do saldo e benefícios 
                adquiridos por sua empresa. </br>
                </br>
                Para que as empresas possam ter o Urflex Mobilidade para seus funcionários, é necessário fazer uma 
                solicitação de investimento, em que será analisado conforme o porte da empresa, média de faturamento 
                e quantidade de colaboradores o melhor plano entre os seguintes: </br>
                </br>
                <img src="${Plans}" alt="Plans" /><br/><br/>
                Depois que a empresa faz a aquisição do plano, será feita a implantação da utilização do Urflex Mobilidade. 
                É importante ressaltar que a empresa irá escolher qual valor depositar no cartão de cada colaborador, 
                uma vez depositado, o mesmo pode usar em aplicativos de corrida, abastecimento de carro ou moto e em 
                pontos de estacionamento.`}
            >

            </QuestionCard>
            <QuestionCard
                question="O que é o cartão Urflex Mobilidade?"
                answer="O cartão Urflex Mobilidade poderá ser virtual ou físico, vai depender de qual o 
                plano da empresa. Sua funcionalidade será nacional, podendo ser utilizados em aplicativos 
                de corrida como Uber, 99, Táxi e InDrive, bem como em estacionamentos e diversos postos de 
                combustíveis que aceitem o cartão. Quando a empresa possui as duas funções do cartão, o 
                colaborador poderá usar virtualmente ou ter o cartão físico. O seu saldo será atualizado 
                mensalmente na data que a sua empresa definir."
            />
            <QuestionCard
                question="O que é o aplicativo Urflex?"
                answer="Em complemento ao cartão Urflex Mobilidade, teremos um aplicativo onde, através dele, 
                será possível realizar os mesmos pagamentos realizados pelo cartão, além de checar seu saldo, 
                histórico de transações, melhores preços pela região, entre outras funcionalidades adicionais."
            />
        </FAQContainerStyled>
    );
}

export default FAQContainer;
