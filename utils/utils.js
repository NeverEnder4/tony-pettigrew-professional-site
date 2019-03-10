const dateToInt = date => new Date(date).getTime();

const sortThoughtsByDate = arr => {
  return arr.sort(
    (a, b) => dateToInt(b.date_posted) - dateToInt(a.date_posted),
  );
};

export { sortThoughtsByDate };
