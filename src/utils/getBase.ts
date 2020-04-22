function getBasePath(url?: string) {
  if (!url) return '';
  /**
   * 解析 url 的正则表达式, 匹配第一个出现的[和非'/'相邻的'/']分解url
   * @example:
   * url: "https://gec123.com/demo"
   * result: ["https://gec123.com/demo", "https:/", "/gec123.com/demo"]
   * @example:
   * url: "//gec123.com/demo"
   * result: ["//gec123.com/demo", "/", "/gec123.com/demo"]
   * @example:
   * url:  "/gec123.com/demo"
   * result: ["/gec123.com/demo", "", "/gec123.com/demo"]
   */
  // eslint-disable-next-line no-useless-escape
  const regx = /(.*?)(\/[^\/].*)/;
  const result = regx.exec(url);
  if (!result) return '';
  /* eslint-disable indent */
  return result[1]
    ? `/${result[2]
        .split('/')
        .slice(2)
        .join('/')}`
    : result[2];
}

export default () => {
  const basePath = getBasePath(process.env.REACT_APP_PUBLIC_URL);
  return `${basePath === '/' ? '' : basePath}`;
};
