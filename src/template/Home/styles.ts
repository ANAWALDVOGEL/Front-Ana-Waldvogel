import styled from 'styled-components';

export const FeedAll = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`;
export const TopPage = styled.div`
    height: 120px;
    width: 100%;
    background-color: #83c5be;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TopPiu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 120px;
`;

export const TopPiuName = styled.h1`
    color: '#00000';
    font-size: 72px;
    font-family: 'Fredoka';
`;

export const TopPiuLogo = styled.img`
    border-radius: 44px;
    width: 88px;
    height: 88px;
`;

export const TopSearch = styled.div`
    background-color: white;
    border: 1px black solid;
    border-radius: 16px;
    align-items: center;
    width: 448px;
    height: 64px;
    display: flex;
    align-items: center;
`;

export const TopSearchIcon = styled.img`
    padding: 16px;
`;

export const TopSearchPhoto = styled.div`
    padding-right: 120px;
    gap: 16px;
    align-items: center;
    display: flex;
    flex-direction: row;
`;

export const TopPhoto = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 44px;
    border: 1px solid black;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const SideBarLeft = styled.div`
    width: 728px;
    height: 100%;
    padding-left: 120px;
    border-radius: 16px;
`;

export const SideBarSearching = styled.div`
    gap: 16px;
    padding-top: 48px;
    padding-right: 16px;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 1px solid #c8f3ef;
`;

export const SideBarIcon = styled.img`
    width: 40px;
    height: 40px;
`;

export const SideBarSearch = styled.div`
    background-color: white;
    width: 288px;
    height: 48px;
    border: 1px black solid;
    border-radius: 16px;
    align-items: center;
    display: flex;
    align-items: center;
`;

export const SideBarSearchIcon = styled.img`
    height: 32px;
    width: 32px;
    padding-left: 8px;
`;

export const PiuWriting = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const PiuInput = styled.input`
    border-radius: 16px;
    width: 320px;
    height: 200px;
    border: 1px solid black;
    margin-top: 16px;
    padding-top: 8px;
    font-size: 20px;
`;

export const PiuText = styled.span`
    font-family: 'Fredoka';
    font-size: 24px;
    margin-left: 32px;
    padding-top: 48px;
`;

export const PiuSend = styled.button`
    border-radius: 16px;
    width: 120px;
    height: 24px;
    border: 1px solid black;
    background-color: #83c5be;
    margin-top: 16px;
    margin-left: 232px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Fredoka';
    font-size: 20px;
`;

export const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    border-radius: 16px;
    border-left: 1px solid black;
`;

export const CenterText = styled.span`
    font-size: 64px;
`;

export const SideBarRight = styled.div`
    width: 728px;
    padding-right: 120px;
    gap: 56px;
    padding-top: 32px;
`;

export const SideBarRightTop = styled.div`
    height: 616px;
    background-color: #f1f1f1;
    border-radius: 16px;
    padding-top: 16px;
`;

export const SideBarRTText = styled.span`
    font-family: 'Fredoka';
    font-size: 32px;
    padding-left: 40px;
    padding-right: 40px;
    height: 88px;
    font-weight: bold;
`;

export const SideBarRightBottom = styled.div`
    height: 232px;
    padding-bottom: 32px;
    border-radius: 16px;
    background-color: #f1f1f1;
    margin-top: 56px;
    padding-top: 16px;
`;

export const SideBarRBText = styled.span`
    font-family: 'Fredoka';
    font-size: 32px;
    padding-left: 48px;
    padding-right: 48px;
    height: 88px;
    font-weight: bold;
`;
