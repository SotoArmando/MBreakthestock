
function convertRemToPixels (rem)  {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function returnportionwidth(portion, w = document.body.getBoundingClientRect().width)  {
    return w * portion;
}

export {
    convertRemToPixels,returnportionwidth
}