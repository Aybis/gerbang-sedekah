export function removeCSSClass(ele, cls) {
  const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  ele.className = ele.className.replace(reg, ' ');
}

export function addCSSClass(ele, cls) {
  ele.classList.add(cls);
}

export const getImageFromAssets = (pathname) =>
  process.env.PUBLIC_URL + pathname;

export const getImageFromStorage = (pathname) =>
  process.env.REACT_APP_API_IMAGE + '/' + pathname;

export const imageApi = (name) =>
  `https://ui-avatars.com/api/?background=257CC0&color=fff&length=2&name=${name}`;

export const imageApiAvatarUser = (name) =>
  `https://ui-avatars.com/api/?background=257CC0&color=fff&length=2&name=${name}`;

export const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );
