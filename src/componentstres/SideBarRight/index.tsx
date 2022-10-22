import * as S from './styles';

export type RightProps = {
    text: string;
    img: string;
};

const RightComponent: React.FC<RightProps> = ({ text, img }) => (
    <S.NewContainer>
        <S.NewImage src={img} />
        <S.NewText>{text}</S.NewText>
    </S.NewContainer>
);

export default RightComponent;
