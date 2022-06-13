const host = 'http://localhost:3003/api/v1'
var prefix = '#input'

var queryElement = (selector) => {
    const element = document.querySelector(selector)
    return { selector, element }
}

var registerVehicle = async () => {
    const modelo = queryElement('#inputModel').element.value.toString()
    const marca = queryElement('#inputBrand').element.value.toString()
    const anoDeFabricacao = queryElement('#inputYear').element.value.toString()

    const data = {
        "atributes": {
            "model": modelo,
            "yearOfManofacture": anoDeFabricacao,
            "brand": marca
        }
    }

    var asyncRegisterVehicle = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/passeio`,
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json",
                    data: JSON.stringify(data),
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
    const message = await asyncRegisterVehicle()
    console.log(message)
    return message
}

var getAllVehicle = async () => {
    var asyncGetVehicles = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/passeio`,
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
    const vehicles = await asyncGetVehicles()
    console.log(vehicles)
    return vehicles
}

var createCards = (vehicles) => {
    const cards = []
    vehicles.forEach(item => {
        cards.push(`
        <div class="col-md-4 col-sm-12">
            <div class="card bg-dark">
                <div class="card-header bealtiful-text">
                    ${item.model.toUpperCase()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bealtiful-text">Marca: ${item.brand}</li>
                    <li class="list-group-item bealtiful-text">Quantidade de portas: ${item.doorQuantitie}</li>
                    <li class="list-group-item bealtiful-text">Ano de fabricação: ${item.yearOfManofacture}</li>
                </ul>
            </div>
        </div>
        `)
    })
    return cards
}

var showVehicleCards = (cards) => {
    const viewContainer = queryElement('#view-section').element
    viewContainer.innerHTML = cards.join('\n')
}

var showEmptyMessage = () => {
    queryElement('#empty-message').element.hidden = false
}

var showVehicles = async () => {
    (async () => {
        try {
            const vehicles = await getAllVehicle()
            if (vehicles.data.length == 0) showEmptyMessage()
            else {
                const cards = createCards(vehicles.data)
                showVehicleCards(cards)
            }
            console.log(JSON.stringify(vehicles))
        } catch (error) {
            console.log(error)
        }
    })()
}

var showSuccessMessage = async () => {
    try {
        const message = await registerVehicle()
        const success = !message.error ? 'Veículo cadastrado!' : false
        queryElement('.message > span').element.innerHTML = success
        queryElement('.message > span').element.style.color = 'green'
        setTimeout(() => {
            queryElement('.message > span').element.innerHTML = ''
        }, 3000);
    }
    catch (error) {
        queryElement('.message > span').element.innerHTML = 'Falha no cadastro!'
        queryElement('.message > span').element.style.color = 'red'
        setTimeout(() => {
            queryElement('.message > span').element.innerHTML = ''
        }, 3000);
    }
}

queryElement('#form-veiculos').element.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()
    showSuccessMessage()
})
queryElement('#show-register-page').element.addEventListener('click', event => {
    queryElement('#register-section').element.hidden = false
    queryElement('#view-section').element.hidden = true
})
queryElement('#show-registered-vehicles').element.addEventListener('click', event => {
    queryElement('#register-section').element.hidden = true
    queryElement('#view-section').element.hidden = false
    showVehicles()
})