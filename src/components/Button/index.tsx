import React from "react"
import { TouchableOpacityProps } from "react-native"
import { ButtonStyle, ButtonText } from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    children: string;
}

function Button({ children, disabled, ...props }: ButtonProps) {
    return <ButtonStyle disabled={!!disabled} {...props}>
        <ButtonText>{children}</ButtonText>
    </ButtonStyle>
}

export { Button }