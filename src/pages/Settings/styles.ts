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

export const BackButton = styled(MaterialIcons).attrs(() => ({ name: 'arrow-back', size: 30 }))`
    color: white;
`;

export const HeaderText = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 24px;

    margin-left: 16px;

`;

export const ConfigSection = styled.View`
    margin-top: 18px;
`;

export const Label = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 18px;
`;

export const AboutSection = styled.View`
    margin-top: 30px;

    border-style : solid;
    border-top-width: 1px;
    border-top-color : white;

    padding-top: 30px;
`;

export const AboutTitle = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 24px;
`;

export const AppDescription = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 14px;

    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
`;

export const AuthorSection = styled.View`
    margin-top: 16px;
`;

export const AuthorTitle = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 22px;
`;

export const AuthorCard = styled.View`
    flex-direction: row;

    align-items: center;

    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
`;

export const AuthorImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;

`;

export const AuthorDetails = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const AuthorName = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 18px;

    font-weight: bold;
`;

export const AuthorDescription = styled.Text`
    color: white;

    font-family: 'Poppins_400Regular';
    font-size: 16px;
`;

export const AuthorContacts = styled.View`
    margin-top: 5px;

    flex-direction: row;
`;

export const AuthorContact = styled.TouchableNativeFeedback``;

export const Separator = styled.View`
    width: 10px;
`;

