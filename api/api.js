const getData = async (url, fetch) => {
  try {
    const res = await fetch(url);
    const { data } = await res.json();
    return data;
  } catch {
    console.warn(error);
    return [];
  }
};

module.exports = { getData };
