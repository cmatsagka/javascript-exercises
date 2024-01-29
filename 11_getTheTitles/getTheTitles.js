const getTheTitles = function(books) {
    let titles = [];
    for (let item in books){
        titles = titles.concat(books[item].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
