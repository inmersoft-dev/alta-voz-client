// @ts-check

/**
 * @param {number} time
 */
export const parseDate = (time) => {
  const date = new Date();
  date.setTime(time);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

/**
 * @param {number} time
 */
export const parseDateTime = (time) => {
  const date = new Date();
  date.setTime(time);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};
