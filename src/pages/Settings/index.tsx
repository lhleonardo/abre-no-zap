import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AboutSection, BackButton, ConfigSection, Container, Header, HeaderText } from "./styles";

export function Settings() {

    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    return <Container>
        <Header>
            <TouchableOpacity onPress={handleGoBack}>
                <BackButton />
            </TouchableOpacity>
            <HeaderText>Configurações</HeaderText>
        </Header>

        <ConfigSection>

        </ConfigSection>

        <AboutSection>

        </AboutSection>
    </Container>
}