// 把 OLD_URL 改成你想反代的网站
const OLD_URL = "developer.mozilla.org"

// 把 WORKER_HOSTNAME 改成你的 worker 域名
const WORKER_HOSTNAME = "XXX.YYY.workers.dev"
async function handleRequest(req) {
  const parsedUrl = new URL(req.url)
  let path = parsedUrl.pathname

  if (path.indexOf(OLD_URL) === -1) {
    path = '/' + OLD_URL + path
  }

  const res = await fetch('https:/' + path)
  
  return rewriter.transform(res)
}

class AttributeRewriter {
  constructor(attributeName) {
    this.attributeName = attributeName
  }
  element(element) {
    const attribute = element.getAttribute(this.attributeName)
    if (attribute == null) {

    }

    else if (attribute.startsWith('/')) {
      element.setAttribute(
        this.attributeName,
        attribute.replace(attribute, '/' + OLD_URL + attribute)
      )
    }
  }
}

const rewriter = new HTMLRewriter()
  .on("a", new AttributeRewriter("href"))
  .on("img", new AttributeRewriter("src"))
  .on("link", new AttributeRewriter("href"))
  .on("script", new AttributeRewriter("src"))

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
