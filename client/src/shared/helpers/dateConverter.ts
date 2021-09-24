export const getCurrentTimeInSeconds = () => {
    return Math.floor(Date.now() / 1000);
}

export const setExpireTimeInSeconds = (expiresIn: number) => {
    return getCurrentTimeInSeconds() + expiresIn;
}