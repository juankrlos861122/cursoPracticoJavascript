function calcularPrecioConDescuento(precio,descuento){
    return (precio * (100 - descuento)) / 100;
}

function onClickButtonPriceDiscount(){
    const input1 = document.getElementById("inputPrice");
    const input2 = document.getElementById("inputCoupon");

    const priceValue = parseFloat(input1.value);
    const couponValue = parseFloat(input2.value);

    const coupons = [
        {
            name: "Quince",
            discount: 15,
        },
        {
            name: "Treinta",
            discount: 30,
        },
        {
            name: "Veinticinco",
            discount: 25,
        }
    ];

    const isCouponValueValid = function (coupon) {
        return coupon.discount === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    const resultP = document.getElementById("resultP");
    if (!userCoupon) {
        resultP.innerText = "El cupón del " + couponValue + "% no es válido";
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
