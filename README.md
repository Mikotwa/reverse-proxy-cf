# reverse-proxy-cf
将你的 Cloudflare Worker 变成一个 HTTP 在线网页代理 / 镜像。

> 警告！该项目的使用受到你所在地法律法规的限制。确保合规使用本项目是您的责任。本项目按“原样”提供，不提供任何明示或暗示。由于使用该项目造成的任何损失，作者不予负责。

## 有何优势
- 灵活处理网页内资源 / JS 加载，不漏内容。
- 多站点支持。一个节点，多个世界。
- 轻量，易搭建。你只需要的是一个免费的 Cloudflare 账号。

## 测试用实例
> 测试实例限制为仅允许访问以下两个域名。你可以自己搭建，搭建出来的实例没有限制。
1. 反代 MDN：https://reverse-proxy-cf-mdn.lacknown.workers.dev/developer.mozilla.org
2. 反代 example.com：https://reverse-proxy-cf-mdn.lacknown.workers.dev/example.com

## 如何使用？
打开 index.js，修改下面的内容：
- ```WORKER_HOSTNAME```：你的 Worker 域名

然后，将修改完毕的内容粘贴到新建的 Cloudflare Worker 上。试试看效果吧。

## 已知局限 / 待完善
- 部分站点（如 Bing、Mediawiki 等）反代结果不正常。
- Referer 反代被改坏了...
- ~~只能反代一个站点。~~ 已支持多站点。
- ~~依赖于其它 CDN JS 载入的网页可能会缺少内容（相关代码未完善）~~ 部分修复。
- ...
