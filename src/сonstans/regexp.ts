export const regexp = {
    EMAIL: /^.+@[^@]+\.[^@]{2,}$/,
    PHONE: /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
    PASSWORD: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
};
