const dirtyData  = document.getElementById('duplicated-cards');
const cleanData  = document.getElementById('clean-cards');
const eliminados = document.getElementById('eliminados');
const limpios    = document.getElementById('limpios');
const ingresar   = document.getElementById('ingresar');


/**
 * Given an array of objects, remove any duplicate objects based on a property
 * @param originalArray - the array you want to remove duplicates from.
 * @param prop - The property to use as the key for the lookup.
 * @returns An array of objects with the same value for the specified property.
 */
 const removeDuplicates = (originalArray, prop) => {
    const newArray = [];
    const lookupObject  = {};

    for(let i in originalArray) 
        lookupObject[ originalArray[i][prop] ] = originalArray[i]; // it replaces the repeated object on itself
    for(let i in lookupObject)
        newArray.push( lookupObject[i] );
    return newArray;
}

const saveCards = ( data ) => {
    let outputData = '';
    for (let i in data)
        outputData += `${ data[i].card_number }|${ data[i].expiration_date.replace('/', '|') }|${ data[i].cvv }\n`;
    // fs.writeFileSync( 'dataOutput.txt', outputData );
    return outputData;
}

const clean = () => {
    if (dirtyData.value == '') {
        ingresar.innerText = 'Ingresa tarjetas para limpiar!'
        return false;
    }
    const data = JSON.parse(dirtyData.value);

    const uniqueArray = removeDuplicates(data, 'card_number');
    const borrados = data.length - uniqueArray.length;

    cleanData.value = saveCards(uniqueArray);
    limpios.innerText = 'Tarjetas unicas: ' + uniqueArray.length;
    eliminados.innerText = 'Duplicados eliminados: ' + borrados;
}
