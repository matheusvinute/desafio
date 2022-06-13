const host = 'http://localhost:3003/api/v1'
var prefix = '#input'

var getCepResults = async (cep) => {
    var asyncGetCep = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/cep?cep=${cep}`,
                    type: 'get',
                    dataType: 'json',
                    contentType: "application/json",
                })
                    .done(data => {
                        resolve(data)
                    })
                    .fail(err => {
                        console.log(err.responseJSON)
                        reject(err.responseJSON)
                    });
            })
        } catch (error) { return error }
    }
    const cepResults = await asyncGetCep()
    console.log(cepResults)
    return cepResults
}

var queryCepElementValue = (id) => {
    const element = document.querySelector(id)
    const value = element.value.replace('.', '').replace('-', '')
    return { id, element, value }
}

var showElementResults = (id, result) => {
    const cepElement = id.replace('#input', '')
    document.querySelector(`#error${cepElement}`).hidden = true
    const { estado, cidade, bairro, endereco } = result
    const estadoEl = document.querySelector(`#card${cepElement} > #results${cepElement} #estado`)
    const cidadeEl = document.querySelector(`#card${cepElement} > #results${cepElement} #cidade`)
    const bairroEl = document.querySelector(`#card${cepElement} > #results${cepElement} #bairro`)
    const enderecoEl = document.querySelector(`#card${cepElement} > #results${cepElement} #endereco`)

    estadoEl.innerHTML = estado
    cidadeEl.innerHTML = cidade
    bairroEl.innerHTML = bairro
    enderecoEl.innerHTML = endereco

    document.querySelector(`#results${cepElement}`).hidden = false
}

var hideElementResults = (id) => {
    const cepElement = id.replace('#input', '')

    document.querySelector(`#results${cepElement}`).hidden = true
}

var showCepResults = async () => {
    const arrayCep = [
        queryCepElementValue(prefix + "CepUm"),
        queryCepElementValue(prefix + "CepDois"),
        queryCepElementValue(prefix + "CepTres"),
        queryCepElementValue(prefix + "CepQuatro"),
        queryCepElementValue(prefix + "CepCinco")
    ]
    arrayCep.forEach(item => {
        (async () => {
            try {
                const cepResults = await getCepResults(item.value)
                console.log(`consulta: ${JSON.stringify(cepResults, null, 2)}`)
                showElementResults(item.id, cepResults)
                document.querySelector(`#error${item.id.replace('#input', '')}`).hidden = true
            } catch (error) {
                console.log(`Erro: ${error}`)
                hideElementResults(item.id)
                document.querySelector(`#error${item.id.replace('#input', '')}`).hidden = false
            }
        })()
    })
}

var MascaraCep = (cep) => {
    if (mascaraInteiro(cep) == false) {
        event.returnValue = false;
    }
    return formataCampo(cep, '00.000-000', event);
}

var mascaraInteiro = () => {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        return false;
    }
    return true;
}

var formataCampo = (campo, Mascara, evento) => {
    var boleanoMascara;

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace(exp, "");

    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length

    if (Digitato != 8) { // backspace 
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                || (Mascara.charAt(i) == "/"))
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
            if (boleanoMascara) {
                NovoValorCampo += Mascara.charAt(i);
                TamanhoMascara++;
            } else {
                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                posicaoCampo++;
            }
        }
        campo.value = NovoValorCampo;
        return true;
    } else {
        return true;
    }
}

document.querySelector('#cep-form').addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()
    showCepResults()
})