---
order: 0
title: Component of React
---

这里是 Maycur Component 的 React 实现，开发和服务于企业级后台产品。

<div class="pic-plus">
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 React 组件。
- 使用 TypeScript 构建，提供完整的类型定义文件。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install mkrc --save
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 示例

```jsx
import { DatePicker } from 'mkrc';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/mkrc.css';  // or 'mkrc/dist/mkrc.less'
```

### 按需加载

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "mkrc", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
     ]
   }
   ```

   > 注意：webpack 1 无需设置 `libraryDirectory`。

   然后只需从 mkrc 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

   ```jsx
   // babel-plugin-import 会帮助你加载 JS 和 CSS
   import { DatePicker } from 'mkrc';
   ```

- 手动引入

   ```jsx
   import DatePicker from 'mkrc/lib/date-picker';  // 加载 JS
   import 'mkrc/lib/date-picker/style/css';        // 加载 CSS
   // import 'mkrc/lib/date-picker/style';         // 加载 LESS
   ```
