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

export const minLength3 = minLength(3)
export const maxLength20 = maxLength(20)