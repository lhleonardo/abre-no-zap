import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #191919;

    position: relative;
`;

export const SettingsContainer = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const Header = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 30px;
`;

export const TextTitle = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 32px;
`;

export const AppDescription = styled.Text`
    color: white; 
    font-family: 'Poppins_400Regular';
    font-size: 14px;

    text-align: center;

    margin-top: 12px;
`;

export const Main = styled.View`
    margin-top: 50px;
    width: 100%;
    padding: 0 30px;
`;

export const Label = styled.Text`
    color: white;
    font-family: 'Poppins_400Regular';
    font-size: 18px;
`;

export const AnouncementContainer = styled.View`
    height: 15%;
    background: #c4c4c4;
    width: 100%;    

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`;