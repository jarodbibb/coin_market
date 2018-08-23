$(document).ready(function(){ 
    $.get('https://api.coinmarketcap.com/v2/ticker/', function(res){
        
        var market_cap = res.data["1"].quotes.USD.market_cap
        var price = res.data["1"].quotes.USD.price
        var circulatingsupply = res.data["1"].circulating_supply
        var volume_24h = res.data["1"].quotes.USD.volume_24h

        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        $('#currency').html(
            `
            <td id="number">1</td>
            <td id="name">${res.data["1"].name}</td> 
            <td id="marketcap">$${numberWithCommas(market_cap)}</td>
            <td id="price">$${numberWithCommas(price.toFixed(2))}</td>
            <td id="volume">$${numberWithCommas(volume_24h.toFixed(0))}</td>
            <td id="circulatingsupply">${numberWithCommas(circulatingsupply)} BTC</td>
            <td id="change">${res.data["1"].quotes.USD.percent_change_24h}%</td>
            <td id="graph"></td>
            `
        )

    }, 'json')
})