## Easy steps:

* [Fork](https://github.com/git-tips/tips/network) the repo.

* Install the deps:
 ```sh
  $ cd tips && npm install
  ```

 :warning: don't fail to think that this is optional, because if you don't install the dependencies you won't get the benefit of auto-updating README and TOC and your PR will likely to not get merged because of that.

* Edit [tips.json](./tips.json) to add your tip in the below format:

```js
{
    "title": <your_tip_title>,
    "tip": <your_tip>,
    "alternatives": [Optional list of alternatives]
}
```

* Commit, push and send a PR!
