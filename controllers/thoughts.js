const getAllPosts = (res, butter) => {
  butter.content
    .retrieve(['thoughts'])
    .then(data => res.json(data))
    .catch(err => console.log(err));
};

module.exports = {
  getAllPosts,
};
