export const isRequired = (value) =>
    value.length ? undefined : "The field is required"

const minLength = (length) => (value) => {
    return value.length >= length
        ? undefined
        : `The min length must be ${length}`
}

const maxLength = (length) => (value) => {
    return value.length <= length
        ? undefined
        : `The max length must be ${length}`
}

export const validateEmail = (email) => {
    const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return rgx.test(String(email).toLowerCase()) ? undefined : "The email is invalid"
};

export const minLength3 = minLength(3)
export const maxLength20 = maxLength(20)