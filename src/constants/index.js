export const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const HOME_PATH = "/";

export const DEATIL_PATH = (param) => {
  const detail = "/detail";
  if (param) {
    return `${detail}/${param}`;
  }
  return "/detail/:detailId";
};
