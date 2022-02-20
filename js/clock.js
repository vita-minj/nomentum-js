const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
getClock(); // 로드 시 바로 시계가 보일 수 있도록 하기위해 사용
setInterval(getClock, 1000);
//setTimeout(sayHello, 5000);