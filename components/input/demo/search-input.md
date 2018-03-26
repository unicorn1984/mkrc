---
order: 4
title:
    zh-CN: 搜索框
    en-US: Search box
---

````jsx
import { Input } from 'mkrc';
const Search = Input.Search;

ReactDOM.render(
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br /><br />
    <Search
      theme="surround"
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
    <br /><br />
    <Search theme="surround" placeholder="input search text" enterButton="Search" size="large" />
  </div>
, mountNode);
````
