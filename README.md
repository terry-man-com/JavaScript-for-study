# JavaScript-for-study
JavaScriptの学習用
### 関数
<details><summary>コールバック関数</summary>

```
const foo = (callback) => {
  console.log("work A");
  callback();
};

const bar = () => {
  console.log("work B");
};

foo(bar);
```
- 関数の引数にさらに関数を渡す。
- barはfooを呼び出した時にcallbackに代入される。
- foo内のcallback()にて呼び出されて、実行される。

</details>
<details><summary>戻り値</summary>

- 関数の処理結果を変数に代入したり、他の関数の引数にしたりできる。
```
const getSeason = () => {
  const month = new Date().getMonth() + 1;
  if(month >= 3 && month <= 5){
    return "spring";
  } else if (month >= 6 && month <= 8){
    return "summer";
  } else if (month >= 9 && month <= 11){
    return "autumn";
  } else {
    return "winter";
  }
};
const season = getSeason(); //関数の結果を変数に代入している。
if (season == "autumn"){　// getSeasonの結果を条件式にして分岐処理
  changeDarkMode(3);
} else {
  changeDarkMode(20);
};
```
