# reverse-proxy-cf
将你的 Cloudflare Worker 变成一个 HTTP 在线网页代理 / 镜像。

## 如何使用？
打开 index.js，修改下面的内容：
- ```OLD_URL```：你想要镜像的站点域名
- ```WORKER_HOSTNAME```：你的 Worker 域名

然后，将修改完毕的内容粘贴到新建的 Cloudflare Worker 上。试试看效果吧。

## 已知局限 / 待完善
- 部分站点（如 Bing 等）反代结果不正常。
- 只能反代一个站点。
- ...
