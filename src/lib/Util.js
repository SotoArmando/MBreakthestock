
function convertRemToPixels (rem)  {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function returnportionwidth(portion, w = document.body.getBoundingClientRect().width)  {
    console.log(portion, w * portion)
    return w * portion;
}

export {
    convertRemToPixels,returnportionwidth
}