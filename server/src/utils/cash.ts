type NotesAmount = {
    oneAmount?: number,
    tenAmount?: number,
    hundredAmount?: number
};

export function cashAmount(purchase: number, payment: number): any {

    const returnedValue = payment - purchase;

    const isValid = purchaseIsValid(returnedValue);

    if(!isValid) return {
        'error': true,
        'message': 'the payment value is not enough'
    };

    const countNotes: NotesAmount = {}

    countNotes.oneAmount = returnedValue % 10;
    countNotes.tenAmount = ((returnedValue % 100) - countNotes.oneAmount) / 10;
    countNotes.hundredAmount = (returnedValue - (countNotes.oneAmount + countNotes.tenAmount * 10)) / 100;

    return countNotes;
}

export function purchaseIsValid(returnedValue: number) : boolean {
    const isValid = returnedValue >= 0 ? true : false; 
    return isValid;
}