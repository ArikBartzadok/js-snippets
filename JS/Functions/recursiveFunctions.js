/**
 * @description Função recursiva
 * 
 * @param {Integer} max - número máximo de execuções
 */
function recursiva({ max }) {
    return (max >= 10)
        ? null
        : recursiva({ max: (++max) });
}

recursiva({ max: -10 });