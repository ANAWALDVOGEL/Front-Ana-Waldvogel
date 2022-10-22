import * as S from './styles';

export type PiuProps = {
    user: string;
    img: string;
    text: string;
    selected?: boolean;
};

const PiuComponent: React.FC<PiuProps> = ({ user, img, text, selected }) => (
    <S.PiuContainer>
        <S.PiuInfo>
            <S.PiuImage src={img}/>
            <S.PiuUser>{user}</S.PiuUser>
        </S.PiuInfo>
        <S.PiuText>{text}</S.PiuText>
        <S.PiuInteraction>
            <S.PiuLike selected={selected} src="/assets/coracao.png" />
            <S.PiuShare type= "image" src="/assets/compartilhar.png" />
            <S.PiuComment>Comentar</S.PiuComment>
            <S.PiuDelete>Deletar</S.PiuDelete>
        </S.PiuInteraction>
    </S.PiuContainer>
);

export default PiuComponent;
