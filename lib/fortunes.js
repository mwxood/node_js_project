const fortuneCookies = [
    'Победи своите страхове или те ще победят теб.',
    'На реките са нужни източници',
    'Не се страхувай от непознатото'
] 

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}