const input = document.getElementById('pantalla');
const buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', datosBotonesClick);
});

document.addEventListener('keydown', datosTeclas);

function datosBotonesClick(e) {
    const textoBoton = e.target.innerHTML;
    entradaDatos(textoBoton);
}

function datosTeclas(e) {
    const teclaPresionada = e.key;
    const teclas = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','=','Enter','Backspace','Delete'];

    if (teclas.includes(teclaPresionada)) {
        e.preventDefault();
        entradaDatos(teclaPresionada);
    }
};

function entradaDatos(key) {
    if (key === '=' || key === 'Enter') {
        try {
            string = string.replace('%', '*0.01*');
            string = eval(string);
            input.value = string;
            
        } catch (error) {
            input.value = 'Error';
        }
    } else if (key === 'AC' || key === 'Escape') {
        string = "";
        input.value = string;
    } else if (key === 'C' || key === 'Backspace' || key === 'Delete') {
        string = string.slice(0, -1);
        input.value = string;
    } else {
        string += key;
        input.value = string;
    }
}

