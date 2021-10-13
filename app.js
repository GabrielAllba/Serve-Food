const serveFood = (foodName, cb) => {
    let times = foodName == 'hamburger' ? 2000 : 5000;
    setTimeout(() => {
        const price = foodName == 'hamburger' ? '5' : '10'
        cb({price, foodName})
    }, times)
}

serveFood('hamburger', hasil => {
    console.log(`your food is ${hasil['foodName']} and the price is $${hasil['price']} ` )
})
serveFood('pizza', hasil => {
    console.log(`your food is ${hasil['foodName']} and the price is $${hasil['price']} ` )
})

console.log('hello there')