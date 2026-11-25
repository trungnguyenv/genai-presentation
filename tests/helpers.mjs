// Records every request that goes to another origin than the site under test.
export function recordOutsideRequests(page, baseURL) {
  const outside = [];
  const origin = new URL(baseURL).origin;
  page.on("request", (r) => {
    if (new URL(r.url()).origin !== origin) outside.push(r.url());
  });
  return outside;
}
