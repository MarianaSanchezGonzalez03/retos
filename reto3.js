function distributeGifts(packOfGifts, reindeers) {
    let reind = 0;
    let gift = 0;
    let nGift = 0;
    reindeers.forEach(element => {
        reind += element.length * 2;
    });

    packOfGifts.forEach(element => {
        gift += element.length;
    });

    nGift = reind / gift;
    return Math.floor(nGift);
}

const packOfGifts = ["book", "dolls", "balls"]
const reindeers = ["dasher", "dancer"]
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
 // 2
console.log(distributeGifts(packOfGifts, reindeers));