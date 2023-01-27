function wrapping(gifts) {
    const giftsWrapeed = [];
    for(let i = 0; i < gifts.length; i++) {
        console.log(gifts[i]);
        let x = gifts[i].length + 2;
        giftsWrapeed.push(`${''.repeat(x)}\n${gifts[i]}\n${''.repeat(x)}`);
    }
    return giftsWrapeed;
}

const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);