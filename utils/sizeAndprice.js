export function orderTheSizes(sizes) {
    const finalArray = [];
    if (sizes.includes('petite')) {
        finalArray.push('petite')
    }
    if (sizes.includes('moyenne')) {
        finalArray.push('moyenne')
    }
    if (sizes.includes('grande')) {
        finalArray.push('grande')
    }

    return finalArray;
}
export function orderThePrices(sizes, formValues) {
    const finalArray = [];
    if (sizes.includes('petite')) {
        finalArray.push(formValues.small_price)
    }
    if (sizes.includes('moyenne')) {
        finalArray.push(formValues.medium_price)
    }
    if (sizes.includes('grande')) {
        finalArray.push(formValues.big_price)
    }

    return finalArray
}


export function makeSizesAndPricesArray(sizes, prices) {
    const myArray = [{ type: sizes[0], price: prices[0] }]
    if (sizes[1]) {
        myArray.push({ type: sizes[1], price: prices[1] })
    }
    if (sizes[2]) {
        myArray.push({ type: sizes[2], price: prices[2] })
    }

    return myArray;
}

export function getSizes(sizesAndPrices) {
    const sizes = []
    sizesAndPrices.forEach(element => {
        sizes.push(element.type)
    });
    return sizes;
}

export function getPrice(sizesAndPrices, size) {
    let containSize = false;
    sizesAndPrices.forEach(element => {
        if (element.type === size) {
            containSize = element.price;
        }
    });

    return containSize;
}