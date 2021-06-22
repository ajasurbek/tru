var BASE_URL = "http://labbay-delivery.uz/logistika/web/"
var IMG_URL = "http://www.labbay-delivery.uz/logistika/admin/"

async function getTariff() {
    let res = await fetch(BASE_URL + 'get_transport.php', {method: "POST"})
    let tariffs = await res.json()
    console.log(tariffs.Response)
    tariffs.Response.Items.forEach((tariff, i) => {
        console.log(tariff)
        document.querySelector('.slider_pickup').innerHTML +=
            `<div class="slider">
                        <div class="img_pickups">
                            <img class="form__slider-img" src=${IMG_URL + tariff.rasmi} data-current=${i}>
                                    <p class="slider__text" data-current=${i}>${tariff.Name}</p>
                        </div>
                   
            `
    })
}

getTariff();