import styled from 'styled-components';

type ChatNameContainerProps = {
    backgroundColor?: string;
};

export const ChatContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #c8f3ef;
`;

export const ChatNameContainer = styled.div<ChatNameContainerProps>`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid black;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
`;

export const ChatName = styled.span`
    font-size: 24px;
    font-weight: bold;
`;

export const ChatConversation = styled.span`
    font-size: 24px;
    color: #545454;
    font-family: 'Fredoka';
    color: #545454;
    padding-left: 16px;
`;
