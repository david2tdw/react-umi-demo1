# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## plugins:

```
yarn upgrade react@^17.0.0
yarn upgrade react-dom@^17.0.0
yarn add @ant-design/pro-layout
```

## 参考：

https://github.com/mpw0311/antd-umi-sys  
https://github.com/chenshuai2144/merge-value-hooks#readme

How to remove experimentalDecorators warning in VSCode  
https://ihatetomatoes.net/how-to-remove-experimentaldecorators-warning-in-vscode/

React 新生命周期--getDerivedStateFromProps  
https://www.jianshu.com/p/50fe3fb9f7c3

React 子组件的 defaultProps、propTypes  
https://www.jianshu.com/p/a1a505929ba5

useMemo 和 useCallback 的使用  
https://www.jianshu.com/p/b71e56ea2fda

图解 scrollHeight, clientHeight, offsetHeight, scrollTop 以及获取方法  
https://www.jianshu.com/p/d267456ebc0d

D3 6.0 migration guide https://observablehq.com/@d3/d3v6-migration-guide

Learn D3: Introduction https://observablehq.com/@d3/learn-d3?collection=@d3/learn-d3

## 问题

页面用.tsx 或.js 文件都可以，但页面中不能使用 PureComponent, 否则渲染不出来。  
采用 ant design pro v4 模板。

## 说明

layout: src/layouts/BasicLayout.tsx - 系统主页面 layout  
src/layouts/BlankLayout.tsx - 空白页面 layout  
src/layouts/UserLayout.tsx - 用户登录 layout

配置： .umirc.ts

动态菜单： src/layouts/defaultMenus.js  
layouts/BasicLayout.tsx

动态生成菜单： BasicLayout.tsx - menuDataRender()

流程图：  
GGEditor: https://github.com/alibaba/GGEditor  
https://ggeditor.com/zh-CN

G6: https://antv-g6.gitee.io/zh/docs/manual/introduction
