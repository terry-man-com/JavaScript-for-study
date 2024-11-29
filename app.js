// コールバック関数
const foo = (callback) => {
  console.log("work A");
  callback();
};

const bar = () => {
  console.log("work B");
};

foo(bar);

// 戻り値
const changeDarkMode = (time) => {
  if(new Date().getHours() > time){
    document.body.style.backgroundColor = "#333";
  }
};
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
const season = getSeason();
if (season == "autumn"){
  changeDarkMode(3);
} else {
  changeDarkMode(20);
};