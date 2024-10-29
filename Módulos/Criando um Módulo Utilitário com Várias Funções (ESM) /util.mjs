export function somaArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
  
export function maiorValor(arr) {
    return Math.max(...arr);
}
  
export function menorValor(arr) {
    return Math.min(...arr);
}  