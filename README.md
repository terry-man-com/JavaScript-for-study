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
</details>
<details><summary>オブジェクト</summary>

- データをまとめて管理するための箱のようなもの
```例
const snsUser3 = {
  id: 1,
  username: "taro",
  followers: ["Yamada","Suzuki","Tanaka"],
  following: ["Yamada", "Suzuki"],
  posts: null,
  settings: { // オブジェクト内のオブジェクト
    premium: true,
    darkMode: false,
  }
  // actions: {
  //   like: () => {...},
  //   post: () => {...},
  // }
};
console.log(snsUser3.username); // 呼び出し
console.log(snsUser3.settings.premium); // オブジェクト呼び出し
console.log(snsUser3.followers[2]);　// 配列呼び出し
snsUser3.actions.like(); // likeメソッドを実行
```
</details>

### ブラウザ-API
- ブラウザーAPIとはWebブラウザ上でJavaScriptを実行し、Webページを操作することを可能とするAPI。
```
window.innerWidth; // 現在のウィンドウの横幅を取得
window.innerHeight; // 現在のウィンドウの縦幅を取得
```

```javascript:具体例

if(window.innerWidth > window.innerHeight){
  //PC用の処理
} else {
  //スマホ用の処理
}
```
### documentのオブジェクト・メソッド
- 要素追加方法　TIPS
1. insertBefore
- 指定した要素の前に新しい要素を挿入する
```
parentElement.insertBefore(newElement, referenceElement);
```
1. insertAdjacentHTML
- 指定した位置にHTML文字列を挿入する。
```
element.insertAdjacentHTML('position', 'HTMLString');
```
- positionの値
 - 'beforebegin': 要素の直前
 - 'afterbegin': 要素の最初の子要素の前
 - 'beforeend': 要素の最後の子要素の後（appendChildに近い）
 - 'afterend': 要素の直後

使用例
```
const $timeline = document.getElementById('timeline');

// timelineの最後に新しい投稿を追加
$timeline.insertAdjacentHTML('beforeend', `
  <article class="post">
    新しい投稿です！
  </article>
`);

// timelineの最初に新しい投稿を追加
$timeline.insertAdjacentHTML('afterbegin', `
  <article class="post">
    一番新しい投稿です！
  </article>
`);
```
### 中間メモ（本１週で読んで理解できていないこと。）
- Javascriptの導入
  -　メタ構成変数：foo,bar(サンプルコードを記載する際に書かれる変数)
- 変数と定数と宣言
  - constで宣言した変数の値を上書きしようとするとエラーが起こり、処理が進まない。下記の場合は、`console.log(foo2)`で`1`が出力されるわけではない。
  ```
  const foo2 = 1;
  const = 2;
  console.log(foo2);
  ```
- データ型について
  - データ型の表
  | データ型 | 英語表記 | 説明 | 例 |
  | ---- | ---- | ---- | ---- |
  | 数値 | Number | 数字を表す | 1, 2, 3, 4, 5 |
  | 文字列 | String | 文字を表す | "Hello", "World" |
  | 論理値 | Boolean | 論理値を表す | true, false |
  | null | null | 値が存在しないことを表す | null |
  | 未定義 | undefined | 値が未定義であることを表す | undefined |
  | オブジェクト | Object | キーと値を対で格納できるまとまり | {foo: 1, bar: 2} |