const getAllPosts = (res, butter) => {
  butter.content
    .retrieve(['thoughts'])
    .then(data => res.json(data))
    .catch(err => console.log(err));
};

const getSinglePost = (req, res, fetch) => {
  const slug = req.params.slug;
  const url = `https://api.buttercms.com/v2/content/`;
  const collection = `?keys=thoughts[slug=${slug}]`;
  const apiKey = `&auth_token=${process.env.BUTTER_API_KEY}`;
  fetch(url + collection + apiKey)
    .then(response => response.json())
    .then(data => {
      const post = data;
      res.json(post);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getAllPosts,
  getSinglePost,
};
