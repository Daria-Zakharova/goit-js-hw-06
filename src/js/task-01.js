(() => {
    const listEl = document.querySelector('#categories');
    const listDescription = {};

    listDescription['Number of categories'] = listEl.children.length;

    [...listEl.children].forEach((category, idx) =>
        listDescription[`category ${idx + 1}`] = {
        category: category.querySelector('h2').textContent,
        elements: category.querySelectorAll('li').length
    });
    
    Object.keys(listDescription).forEach(key =>
        console.log(typeof listDescription[key] === 'object' ? `Category: ${listDescription[key].category}\nElements: ${listDescription[key].elements}` :
        `${key}: ${listDescription[key]}`));

})();