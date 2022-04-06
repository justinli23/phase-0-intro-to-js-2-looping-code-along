const writeCards = (arr, event) => {
    const thankYouArray = [...arr];
    for (let i=0; i < thankYouArray.length; i++) {
        thankYouArray[i]=`Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    }
    return thankYouArray;
}

const countDown = (int) => {
    for (int=int; int >= 0; int--) {
        console.log(int)
    }
}
