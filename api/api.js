// fetch from getInitialProps on the front end

const getData = async (url, fetch) => {
  try {
    const res = await fetch(url);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = { getData };
