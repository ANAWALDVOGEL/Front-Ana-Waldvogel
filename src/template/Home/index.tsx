// import Test from 'components/TestComponent';

import ChatComponent from 'componentsdois/ChatComponent';

import PiuComponent from 'componentsquatro/Feed';

import RightComponent from 'componentstres/SideBarRight';
import { useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    interface InterfacePius {
        user: string;
        img: string;
        text: string;
        id: number;
    }

    const [piuInput, setPiuInput] = useState('');

    const piuInputLength = piuInput.length;

    let exceeded = false;

    const [piusArray, setPiusArray] = useState<InterfacePius[]>([
        {
            img: '/assets/godoy.png',
            user: '@henrique.godoy',
            text: 'Essa provinha de mecânica foi o auge, poli ferrando nois',
            id: 1
        },
        {
            img: '/assets/cainan.png',
            user: '@cainanzera',
            text: 'Semana da P1 foi pegada demais... sinto falta de dormir uma noite digna. Vou migrar pra Prod!',
            id: 2
        },
        {
            img: '/assets/pj.png',
            user: '@polijuniorusp',
            text: 'Batemos 5M de faturamentoooooooooo',
            id: 3
        },
        {
            img: '/assets/ana.jpeg',
            user: '@ana.waldvogel',
            text: 'NTec pq melhor núcleo????',
            id: 4
        },
        {
            img: '/assets/piu.png',
            user: '@piupiuwer',
            text: 'Bem-vindo ao Piupiuwer! Desejamos uma ótima experiência na nossa plataforma :)',
            id: 5
        }
    ]);

    function handleClick() {
        if (piuInput !== '' && piuInput.length <= 140) {
            setPiusArray([
                {
                    img: '/assets/ana.jpeg',
                    user: '@ana.waldvogel',
                    text: piuInput,
                    id: Math.random() * 100
                },
                ...piusArray
            ]);
        }
    }

    function handleDelete(id: number) {
        const index = piusArray.findIndex((piu) => piu.id === id);
        setPiusArray((previousPiusArray) => {
            previousPiusArray.splice(index, 1);
            return [...previousPiusArray];
        });
    }

    function exceededLength() {
        if (piuInputLength > 140) {
            exceeded = !exceeded;
        }
    }
    exceededLength();

    return (
        <S.FeedAll>
            <S.TopPage>
                <S.TopPiu>
                    <S.TopPiuLogo src="/assets/piu.png" />
                    <S.TopPiuName>Piupiuwer</S.TopPiuName>
                </S.TopPiu>
                <S.TopSearchPhoto>
                    <S.TopSearch>
                        <S.TopSearchIcon src="/assets/Vector.png" />
                    </S.TopSearch>
                    <S.TopPhoto src="/assets/ana.jpeg" />
                </S.TopSearchPhoto>
            </S.TopPage>
            <S.Bottom>
                <S.SideBarLeft>
                    <S.SideBarSearching>
                        <S.SideBarIcon src="/assets/message.png" />
                        <S.SideBarSearch>
                            <S.SideBarSearchIcon src="/assets/Vector.png" />
                        </S.SideBarSearch>
                    </S.SideBarSearching>
                    <ChatComponent
                        backgroundColor="pink"
                        img="A"
                        message="Ouuuu responde aeeee!!!"
                    />
                    <ChatComponent
                        backgroundColor="orange"
                        img="C"
                        message="De novo, cara?? Ai não"
                    />
                    <ChatComponent
                        backgroundColor="yellow"
                        img="M"
                        message="Sabe se é verdade que 5o é 10?"
                    />
                    <ChatComponent
                        backgroundColor="red"
                        img="L"
                        message="Como que foi no churras?"
                    />
                    <ChatComponent
                        backgroundColor="green"
                        img="J"
                        message="O Brasil vai ganhar o hexa"
                    />
                    <S.PiuWriting>
                        <S.PiuText>O que você está pensando?</S.PiuText>
                        <S.PiuInput
                            onChange={(event) =>
                                setPiuInput(event.target.value)
                            }
                        />
                        {exceeded ? (
                            <S.PiuTextLengthDois>
                                {piuInputLength} caracteres
                            </S.PiuTextLengthDois>
                        ) : (
                            <S.PiuTextLength>
                                {piuInputLength} caracteres
                            </S.PiuTextLength>
                        )}
                        <S.PiuSend onClick={handleClick}>Enviar</S.PiuSend>
                    </S.PiuWriting>
                </S.SideBarLeft>
                <S.Center>
                    {piusArray.map((piu) => (
                        <PiuComponent
                            img={piu.img}
                            text={piu.text}
                            user={piu.user}
                            handleDelete={handleDelete}
                            id={piu.id}
                        />
                    ))}
                </S.Center>
                <S.SideBarRight>
                    <S.SideBarRightTop>
                        <S.SideBarRTText>Assuntos do momento</S.SideBarRTText>
                        <RightComponent
                            img="/assets/globo.png"
                            text="Preço do petróleo sobe e..."
                        />
                        <RightComponent
                            img="/assets/musica.png"
                            text="Matuê libera seu novo álbu..."
                        />
                        <RightComponent
                            img="/assets/flamengo.png"
                            text="Flamengo: o pior time da história"
                        />
                        <RightComponent
                            img="/assets/piu.png"
                            text="Piupiuwer: a mais nova rede social"
                        />
                        <RightComponent
                            img="/assets/pj.png"
                            text="Poli Júnior é a maior e melhor..."
                        />
                        <RightComponent
                            img="/assets/jade.png"
                            text="Jade Picon comenta sobre críticas"
                        />
                    </S.SideBarRightTop>
                    <S.SideBarRightBottom>
                        <S.SideBarRBText>Siga também:</S.SideBarRBText>
                        <RightComponent
                            img="/assets/flamengo.png"
                            text="@flamengo"
                        />
                        <RightComponent
                            img="/assets/jade.png"
                            text="@jadepicon"
                        />
                    </S.SideBarRightBottom>
                </S.SideBarRight>
            </S.Bottom>
        </S.FeedAll>
    );
};
export default HomeTemplate;
