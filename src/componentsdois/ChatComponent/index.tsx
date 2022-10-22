import * as S from './styles';

export type ChatProps = {
    message: string;
    img: string;
    backgroundColor?: string;
};

const ChatComponent: React.FC<ChatProps> = ({
    message,
    img,
    backgroundColor
}) => (
    <S.ChatContainer>
        <S.ChatNameContainer backgroundColor={backgroundColor}>
            <S.ChatName>{img}</S.ChatName>
        </S.ChatNameContainer>
        <S.ChatConversation>{message}</S.ChatConversation>
    </S.ChatContainer>
);

export default ChatComponent;
