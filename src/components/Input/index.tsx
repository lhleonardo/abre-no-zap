import React from "react";

import { TextInputProps } from "react-native"
import { InputStyle } from "./styles";

function Input(props: TextInputProps) {
    return <InputStyle placeholderTextColor="#999" {...props} />
}

export { Input }