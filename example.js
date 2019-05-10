var data = [{"id":1,"currency":"DASH"},{"id":1,"currency":"BTC"},{"id":1,"currency":"XRP"},{"id":1,"currency":"ZEC"},{"id":1,"currency":"ZEN"},{"id":1,"currency":"LTC"},{"id":1,"currency":"BCH"},{"id":1,"currency":"RVN"},{"id":11,"currency":"BCH"},{"id":11,"currency":"DOGE"},{"id":1,"currency":"DOGE"}]

console.log('data', data)

var coins = ['BCH', 'DOGE', 'RVN', 'DASH']

coins.forEach((coin)=>{


 var merchantList = data.filter( elem => elem.currency === coin)

 console.log(`Merchants that accept ${coin}:` )
 merchantList.forEach ((elem)=>{
     console.log(elem.id)
 })

})
