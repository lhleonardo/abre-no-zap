import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Linking, ScrollView, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import avatar from "../../../assets/lhleonardo.jpg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FontAwesome } from "@expo/vector-icons"
import {
    AboutSection,
    AboutTitle,
    AppDescription,
    AuthorCard,
    AuthorContact, AuthorContacts, AuthorDetails, AuthorImage, AuthorName, AuthorSection, AuthorDescription,
    AuthorTitle, BackButton,
    ConfigSection,
    Container,
    Header,
    HeaderText, Label, Separator
} from "./styles";
import { storage } from "../../services/ConfigStorage";


function openLinkedIn() {
    Linking.openURL("https://www.linkedin.com/in/leonardohbraz/");
}

function openGithub() {
    Linking.openURL("https://github.com/lhleonardo");
}

function openFacebook() {
    Linking.openURL("https://facebook.com/lhleonardo");
}

export function Settings() {
    const { goBack } = useNavigation();

    const [message, setMessage] = useState<string | undefined>(undefined);

    const [inputMessage, setInputMessage] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function loadMessage() {
            const result = await storage.loadMessage();
            setMessage(result);
            setInputMessage(result);
        }

        loadMessage();
    }, []);


    function handleGoBack() {
        goBack();
    }

    function onChangeInputMessage(value: string) {
        setInputMessage(value);
    }

    async function onClickSaveMessage() {
        await storage.setMessage(inputMessage!!)

        Keyboard.dismiss()

        Alert.alert("Sucesso", "Configurações salvas!")

        setMessage(inputMessage)
    }

    return <Container>
        <ScrollView>
            <Header>
                <TouchableOpacity onPress={handleGoBack}>
                    <BackButton />
                </TouchableOpacity>
                <HeaderText>Configurações</HeaderText>
            </Header>

            <ConfigSection>
                <Label>Mensagem padrão da conversa</Label>
                <Input
                    numberOfLines={5}
                    multiline={true}
                    textAlignVertical="top"
                    value={inputMessage}
                    defaultValue={message}
                    onChangeText={onChangeInputMessage}
                    placeholder="Aqui deve estar a mensagem padrão que será enviada no início da conversa."
                />
                <Button disabled={message === inputMessage} onPress={onClickSaveMessage}>Salvar</Button>
            </ConfigSection>

            <AboutSection>
                <AboutTitle>Sobre o app</AboutTitle>

                <AppDescription>
                    Este aplicativo foi criado para facilitar o processo de iniciar
                    uma conversa com um novo contato no WhatsApp, sem precisar adicionar
                    esse número na agenda.
            </AppDescription>

                <AuthorSection>
                    <AuthorTitle>Criado por</AuthorTitle>

                    <AuthorCard>
                        <AuthorImage source={avatar}></AuthorImage>
                        <AuthorDetails>
                            <AuthorName>Leonardo Braz</AuthorName>
                            <AuthorDescription>Desenvolvedor full-stack</AuthorDescription>
                            <AuthorContacts>
                                <AuthorContact onPress={openGithub}>
                                    <FontAwesome color="white" size={26} name="github" />
                                </AuthorContact>
                                <Separator />
                                <AuthorContact onPress={openFacebook}>
                                    <FontAwesome color="white" size={26} name="facebook-official" />
                                </AuthorContact>
                                <Separator />
                                <AuthorContact onPress={openLinkedIn}>
                                    <FontAwesome color="white" size={26} name="linkedin-square" />
                                </AuthorContact>
                            </AuthorContacts>
                        </AuthorDetails>
                    </AuthorCard>
                </AuthorSection>
            </AboutSection>
        </ScrollView>
    </Container>
}