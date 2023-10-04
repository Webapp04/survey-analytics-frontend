export const serialize = (params) => {
  if (params) {
    return (
      "?" +
      Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&")
    );
  } else {
    return "";
  }
};
