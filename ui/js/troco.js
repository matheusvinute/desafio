const host = 'http://localhost:3003/api/v1'

var getCashAmount = async () => {
    document.querySelector("#error-troco").hidden = true
    document.querySelector("#result-troco").hidden = true
    var purchase = document.querySelector('#inputPurchase').value || 0
    if(purchase.includes(',')) purchase = purchase.split(',')[0]
    if(purchase.includes('.')) purchase = purchase.split('.')[0]

    var payment = document.querySelector('#inputPayment').value || 0
    if(payment.includes(',')) payment = payment.split(',')[0]
    if(payment.includes('.')) payment = payment.split('.')[0]

    var asyncGetCashAmount = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/cash?purchase=${purchase}&payment=${payment}`,
                    type: 'get',
                    dataType: 'json',
                    contentType: "application/json",
                })
                    .done(data => {
                        console.log(data)
                        resolve(data)
                    })
                    .fail(err => {
                        console.log(err.responseJSON)
                        reject(err.responseJSON)
                    });
            })
        } catch (error) { return error }
    }
    const cashAmount = await asyncGetCashAmount()
    console.log(cashAmount)
    return cashAmount
}

var showCashResults = async () => {
    try {
        const cashAmount = await getCashAmount()
        document.querySelector("#result-troco").hidden = false

        const valorTotal = cashAmount.oneAmount + cashAmount.tenAmount*10 + cashAmount.hundredAmount*100
        const spanTroco = document.querySelector('#troco')
        const spanUm = document.querySelector('#notas-um')
        const spanDez = document.querySelector('#notas-dez')
        const spanCem = document.querySelector('#notas-cem')
        spanTroco.innerHTML = 'R$'+valorTotal
        spanUm.innerHTML = cashAmount.oneAmount 
        spanDez.innerHTML = cashAmount.tenAmount
        spanCem.innerHTML = cashAmount.hundredAmount
    }
    catch (error) {
        console.log(error)
        if (!!error.error) {
            document.querySelector("#error-troco").hidden = false
        }
    }
}

document.querySelector('#button-calc').addEventListener('click', showCashResults)