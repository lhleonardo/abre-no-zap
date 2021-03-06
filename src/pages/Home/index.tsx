
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Linking, Text } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { storage } from "../../services/ConfigStorage";
import { isValidPhone, phoneMask } from "../../utils";
import { AnouncementContainer, AppDescription, Container, Header, Label, Main, SettingsContainer, TextTitle } from "./styles";

function Home() {
    const [phone, setPhone] = useState<string>("");

    const { navigate } = useNavigation();

    async function handleStartConversation() {
        if (!phone) {
            Alert.alert("Calma lá!", "Informe o número para continuar");
            return;
        }

        if (!isValidPhone(phone)) {
            Alert.alert("Calma lá!", "Informe um número válido no formato (00)00000-0000");
            return;
        }

        const message = await storage.loadMessage();

        Linking.openURL(`http://api.whatsapp.com/send?phone=+55${phone}&text=${message}`);
    }

    function handleOpenSettings() {
        navigate("Settings");
    }

    function changePhoneText(value: string) {
        const formattedText = phoneMask(value);
        setPhone(formattedText);
    }

    return (
        <Container>
            <SettingsContainer onPress={handleOpenSettings}>
                <MaterialIcons name="settings" color="#5F59B1" size={36} />
            </SettingsContainer>
            <Header>
                <TextTitle>Conversar direto no</TextTitle>
                <FontAwesome name="whatsapp" color="white" size={50} />
                <AppDescription>Crie conversas no WhatsApp sem precisar adicionar o número na sua agenda!</AppDescription>
            </Header>

            <Main>
                <Label>Digite o número de telefone</Label>
                <Input maxLength={14} placeholder="(00)0000-0000" keyboardType="phone-pad" value={phone} onChangeText={(value) => changePhoneText(value)} />

                <Button onPress={handleStartConversation}>
                    Iniciar conversa
                </Button>
            </Main>

            <AnouncementContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Local para anúncio!!</Text>
            </AnouncementContainer>
        </Container>
    );

}


export { Home };

