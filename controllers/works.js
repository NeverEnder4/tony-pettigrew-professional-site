const getAllPortfolioItems = (res, butter) => {
  butter.content
    .retrieve(['works'])
    .then(data => res.json(data))
    .catch(err => console.log(err));
};

module.exports = { getAllPortfolioItems };
