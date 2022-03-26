export function higherThan(num) {
    return (x) => x > num;
}

export function hasSubstring(substr) {
    return (x) => x.includes(substr);
}

export function multiply(num) {
    return (x) => x * num;
}
