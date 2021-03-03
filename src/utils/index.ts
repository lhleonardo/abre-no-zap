export function phoneMask(value: string) {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
}

export function isValidPhone(phone: string) {
    return /\(\d{2}\)\d?\d{4}\-\d{4}/.test(phone);
}