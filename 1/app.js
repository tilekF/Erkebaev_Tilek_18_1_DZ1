const INNinput = document.querySelector(".INNinput");
const INNcheck = document.querySelector(".INNcheck");
const INNresult = document.querySelector(".INNresult");

const INNRegExp = /^\1 \d{13}$/;

INNcheck.addEventListener("click", () => {
  if (INNRegExp.test(INNinput.value)) {
    INNresult.innerText = "Найдено";
    INNresult.style.color = "green";
  } else {
    INNresult.innerText = "Не найдено";
    INNresult.style.color = "red";
  }
});