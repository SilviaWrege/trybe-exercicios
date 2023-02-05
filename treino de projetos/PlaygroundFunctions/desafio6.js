function calcTriangleArea(base, height) {
    let area = (base * height) / 2
    return area;
}

function calcRectangleArea(base, height) {
    let area = (base * height);
    return area;
}

function calcAllAreas(base, height, form) {
    let area = 0;
    let mensagem = '';
    if (form === 'triângulo') {
        area = calcTriangleArea(base, height);
        mensagem = `O valor da área do triângulo é de: ${area}`;

    } else if (form === 'retângulo') {
        area = calcRectangleArea(base, height);
        mensagem = `O valor da área do retângulo é de: ${area}`;

    } else {
        mensagem = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';

    }
    return mensagem;
}

console.log(calcAllAreas(10,50, "triângulo"));
