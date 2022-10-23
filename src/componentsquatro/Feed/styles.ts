import styled from 'styled-components';

export const PiuContainer = styled.div`
    border: 1px solid #83c5be;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    width: 1080px;
    height: auto;
    margin-top: 48px;
`;

export const PiuInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
`;

export const PiuImage = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    border: 1px solid black;
`;

export const PiuUser = styled.span`
    font-family: 'Fredoka';
    font-size: 24px;
    font-weight: bold;
`;

export const PiuText = styled.span`
    font-family: 'Fredoka';
    font-size: 24px;
    padding: 8px;
    padding-left: 16px;
    width: 1080px;
    height: auto;
`;

export const PiuInteraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 32px;
    padding-top: 16px;
`;

export const PiuLike = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #83c5be;
    padding: 4px;
    cursor: pointer;
`;

export const PiuLikeDois = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: pink;
    padding: 4px;
    cursor: pointer;
`;

export const PiuShare = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background-color: #83c5be;
    padding: 4px;
    cursor: pointer;
`;

export const PiuComment = styled.button`
    font-size: 20px;
    font-family: 'Fredoka';
    background-color: #83c5be;
    width: 96px;
    border-radius: 16px;
    border: 1px solid black;
    cursor: pointer;
`;

export const PiuDelete = styled.button`
    border-radius: 16px;
    border: 1px solid black;
    font-size: 20px;
    font-family: 'Fredoka';
    background-color: #83c5be;
    width: 96px;
    cursor: pointer;
`;
