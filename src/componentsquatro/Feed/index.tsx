import { useState } from 'react';
import * as S from './styles';

export type PiuProps = {
    user: string;
    img: string;
    text: string;
    id: number;
    handleDelete(id: number): void;
};

const PiuComponent: React.FC<PiuProps> = ({
    user,
    img,
    text,
    id,
    handleDelete
}) => {
    const [liked, setLiked] = useState(false);
    return (
        <S.PiuContainer>
            <S.PiuInfo>
                <S.PiuImage src={img} />
                <S.PiuUser>{user}</S.PiuUser>
            </S.PiuInfo>
            <S.PiuText>{text}</S.PiuText>
            <S.PiuInteraction>
                {liked ? (
                    <S.PiuLikeDois
                        src="/assets/coracao.png"
                        onClick={() => setLiked(!liked)}
                    />
                ) : (
                    <S.PiuLike
                        src="/assets/coracao.png"
                        onClick={() => setLiked(!liked)}
                    />
                )}
                <S.PiuShare src="/assets/compartilhar.png" />
                <S.PiuComment>Comentar</S.PiuComment>
                <S.PiuDelete onClick={() => handleDelete(id)}>
                    Deletar
                </S.PiuDelete>
            </S.PiuInteraction>
        </S.PiuContainer>
    );
};

export default PiuComponent;
