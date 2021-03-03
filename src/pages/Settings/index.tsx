import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Linking, ScrollView } from "react-native";
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
    AuthorContact, AuthorContacts, AuthorDetails, AuthorImage, AuthorName, AuthorSection,
    AuthorTitle, BackButton,
    ConfigSection,
    Container,
    Header,
    HeaderText, Label, Separator
} from "./styles";


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

    function handleGoBack() {
        goBack();
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
                    placeholder="Aqui deve estar a mensagem padrão que será enviada no início da conversa."
                />
                <Button disabled>Salvar</Button>
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