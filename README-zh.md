# Puppeteer Server
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fpdsuwwz%2Fpuppeteer-server.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fpdsuwwz%2Fpuppeteer-server?ref=badge_shield)

中文 | [English](README.md)

## 介绍

> 🦩 Koa + TypeScript + Rollup + Puppeteer

* 能够将任意网页快速生成为 PDF、图片。

* 支持将多个网页合并，并最终生成一个 PDF 文件，支持 Cookie 的注入、PDF 水印的添加和页眉页脚的插入。

## 截图

* 示例：合并两个网站到一个 PDF 文件
> 📦 见代码 [Combine Code](https://github.com/pdsuwwz/puppeteer-server/blob/main/__test__/axios-node.js)


![image](https://user-images.githubusercontent.com/19891724/159743021-e1f9f528-d6d9-4d6b-b63f-4e71c6b72bdb.png)



## 🎯 前序准备

请确保安装了 [Node.js](https://nodejs.org/)(>= 10.18.1)

## ✨ 特性

* 🌈 解耦了业务层和控制层

* 🛡 可能是 Puppeteer 项目的最佳实践

* 🧩 可配置的路由

* 🚧 内置 Eslint 语法风格检查

* ⚡ 使用 Rollup 快速构建

* 🔌 内置了 PDF 水印、页眉和页脚，可自行修改及扩展

* 🧲 支持合并多个 PDF 文件

* 🔥 支持开发环境下的模块热更新

## 项目结构

<pre>
├── src
│   ├── controllers/ ---  控制层，负责调用业务层的接口
│   ├── services/    ---  业务层，负责编写具体的业务代码
│   ├── config.ts    ---  用于导出一些全局变量
│   ├── main.ts      ---  入口文件
│   └── routes.ts    ---  用于配置路由元信息 <a href="#路由配置">👉 路由配置</a>
</pre>

## ⚡ 快速开始

### 1. 安装

```bash
pnpm install
```

### 2. 开发环境运行

```bash
pnpm dev
```

### 3. 生产环境运行

该项目已内置 `pm2`，在构建完毕后运行 `pnpm start` 即可使用 `pm2` 管理进程。

运行 `pnpm build` 进行构建，然后运行 `pnpm start` 启动由 `pm2` 管理的进程:

* 打包构建

```bash
pnpm build
```

* 运行

```bash
pnpm start
```

## 核心接口

* `GET /image`

用于生成一张图片

```bash
curl --location --request GET \
'http://localhost:5000/image?url=https://www.baidu.com' \
--output test-image.png
```

* `GET /simple-pdf`

用于生成一个 PDF 文件

```bash
curl --location --request GET \
'http://localhost:5000/simple-pdf?url=https://www.google.com/' \
--output test-simple-pdf.pdf
```

* `POST /pdf`

可生成一个带有自定义页眉和页脚的 PDF（页眉页脚的内容可通过参数来控制是否显示）

```bash
curl --location --request POST 'http://localhost:5000/pdf' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'url=http://www.google.com' \
--data-urlencode 'cookies[0].name=token' \
--data-urlencode 'cookies[0].value=9s2d4c16-f072-16eg-b134-0642ap190006' \
--data-urlencode 'cookies[0].domain=www.google.com' --output test-complex-pdf.pdf
```

* `POST /combine-pdf`

用于将多个 PDF 文件合并到一个文件

查看 [示例代码](https://github.com/pdsuwwz/puppeteer-server/blob/main/__test__/axios-node.js)


## 路由配置

为了使路由元数据更具可读性和透明性，这里采用了配置化的方式

你可以创建一个 `数组`，然后将路由元信息写入该 `数组` 中，并在 [src/routes.ts](https://github.com/pdsuwwz/puppeteer-server/blob/main/src/routes.ts) 中重用它

```ts
const routes: Array<RouteConfig> = [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  },
  // here...
]
```

# 许可证

:v:

[MIT](./LICENSE)


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fpdsuwwz%2Fpuppeteer-server.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fpdsuwwz%2Fpuppeteer-server?ref=badge_large)
