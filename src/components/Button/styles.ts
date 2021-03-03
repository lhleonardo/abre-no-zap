import styled from "styled-components/native"

interface ButtonStyleProps {
    disabled?: boolean;
}

const colors = {
    normal: '#5F59B1',
    disabled: '#363466'
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
    background: ${props => props.disabled ? colors.disabled : colors.normal};

    margin-top: 16px;

    padding: 20px;
    border: 1px solid white;
    border-radius: 5px;

    align-items: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-family: 'Poppins_400Regular';
    font-size: 16px;
`;