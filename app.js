// ダークモード関数
const changeDarkMode = (obj) => {
  if(new Date().getHours() > obj.time){
    document.body.style.backgroundColor = obj.color;
  }
};

changeDarkMode({time: -1, color: "#333"});