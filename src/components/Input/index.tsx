import React from "react";

import { TextInputProps } from "react-native"
import { InputStyle } from "./styles";

function Input(props: TextInputProps) {
    return <InputStyle {...props} />
}

export { Input }