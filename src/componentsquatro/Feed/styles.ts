import styled from 'styled-components';

interface LikeProps {
    selected: boolean;
}

export const PiuContainer = styled.div`
    border: 1px solid #83c5be;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    width: 1080px;
    height: 200px;
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
`;

export const PiuInteraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 32px;
    padding-top: 16px;
`;

export const PiuLike = styled.button<LikeProps>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: ${({ selected }) => (selected ? 'pink' : '#83c5be')};
`;

export const PiuShare = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #83c5be;
`;

export const PiuComment = styled.button`
    font-size: 20px;
    font-family: 'Fredoka';
    background-color: #83c5be;
    width: 96px;
    border-radius: 16px;
    border: 1px solid black;
`;

export const PiuDelete = styled.button`
    border-radius: 16px;
    border: 1px solid black;
    font-size: 20px;
    font-family: 'Fredoka';
    background-color: #83c5be;
    width: 96px;
`;