import React from "react"
import { TouchableOpacityProps } from "react-native"
import { ButtonStyle, ButtonText } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    children: string;
}

function Button({ children, ...props }: ButtonProps) {
    return <ButtonStyle {...props}>
        <ButtonText>{children}</ButtonText>
    </ButtonStyle>
}

export { Button }