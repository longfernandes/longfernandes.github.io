 export const data = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: getRandomName(),
    age: getRandomInt(18, 32),
    math: getRandomFloat(0, 10),
    literature: getRandomFloat(0, 10),
    english: getRandomFloat(0, 10)
  }));
  
  function getRandomName() {
    const names = ["An", "Bình", "Chi", "Dũng", "Hà", "Huy", "Lan", "Minh", "Ngọc", "Phúc", "Quang", "Trang", "Tú", "Vân", "Yến"];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomFloat(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
  }
  
  console.log(data);