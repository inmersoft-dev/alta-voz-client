// @ts-check

/**
 * @param {number} time
 */
export const parseDate = (time) => {
  const date = new Date();
  date.setTime(time);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
