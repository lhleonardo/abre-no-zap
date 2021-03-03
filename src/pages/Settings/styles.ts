import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons"

export const Container = styled.View`
    flex: 1;
    display: flex;
    background: #191919;
    
    padding: 0 10px;
`;

export const Header = styled.View`
    margin-top: 40px;

    flex-direction: row;
    align-items: center;
`;

export const BackButton = styled(MaterialIcons).attrs(props => ({ name: 'arrow-back', size: 30 }))`
    color: white;
`;

export const HeaderText = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 24px;

    margin-left: 16px;

`;
export const ConfigSection = styled.View``;
export const AboutSection = styled.View``;