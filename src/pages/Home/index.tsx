import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Linking, Text } from "react-native";
import { AnouncementContainer, AppDescription, Button, ButtonText, Container, Header, Input, Label, Main, SettingsContainer, TextTitle } from "./styles";

function phoneMask(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

function isValidPhone(phone: string) {
    return /\(\d{2}\)\d?\d{4}\-\d{4}/.test(phone);
}

function Home() {
    const [phone, setPhone] = useState<string>("");
    const [fontLoaded] = useFonts({ Poppins_400Regular });

    if (!fontLoaded) {
        return <ActivityIndicator></ActivityIndicator>
    }

    function handleStartConversation() {

        if (!phone) {
            Alert.alert("Calma lá!", "Informe o número para continuar");
            return;
        }

        if (!isValidPhone(phone)) {
            Alert.alert("Calma lá!", "Informe um número válido no formato (00)00000-0000");
            return;
        }

        Linking.openURL(`http://api.whatsapp.com/send?phone=+55${phone}&text=Opa,testando`);
    }

    function changePhoneText(value: string) {
        const formattedText = phoneMask(value);
        setPhone(formattedText);
    }

    return (
        <Container>
            <SettingsContainer>
                <MaterialIcons name="settings" color="#5F59B1" size={36} />
            </SettingsContainer>
            <Header>
                <TextTitle>Conversar direto no</TextTitle>
                <FontAwesome name="whatsapp" color="white" size={50} />
                <AppDescription>Crie conversas no WhatsApp sem precisar adicionar o número na sua agenda!</AppDescription>
            </Header>

            <Main>
                <Label>Digite o número de telefone</Label>
                <Input placeholderTextColor="#999" placeholder="(00)0000-0000" keyboardType="phone-pad" value={phone} onChangeText={(value) => changePhoneText(value)} />

                <Button onPress={handleStartConversation}>
                    <ButtonText >Iniciar conversa</ButtonText>
                </Button>
            </Main>

            <AnouncementContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Local para anúncio!!</Text>
            </AnouncementContainer>
        </Container>
    );

}


export { Home };
