const countdown = document.querySelector('.countdown');
const launchDate = new Date('Dec 25, 2020, 00:00:01');
// Инициализируем нужные переменные, которые в дальнейшем будем их использовать
const interval = setInterval(()=>{
    updateTimer();
},1000);
updateTimer();
function updateTimer() { // Создаем функцию, чтобы без боли можно было проще менять код, если он используется в нескольких местах
    let currentDate = new Date();
    // Создаем объект типа Date, поумолчанию которого стоит текущая дата на компьютере
    if(currentDate > launchDate) {
        launchDate.setFullYear(currentDate.getFullYear()); // Условие выполнится только после рождества
        // Если условие истинное, то ставим на текущий год
        if(currentDate > launchDate) {
            launchDate.setFullYear(currentDate.getFullYear() + 1);
            // Если в текущем году не наступило рождество, то прибавляем ещё один год
        }
        console.log(launchDate);
    }
    let diffSeconds = Math.floor((launchDate.getTime() - currentDate.getTime()) / 1000);
    // получив разницу между текущей датой и рождеством, можно сделать из него отсчет
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0; // Объявляем нужные переменные
    days = Math.floor(diffSeconds / (3600 * 24));
    diffSeconds -= days * 3600 * 24;
    hours = Math.floor(diffSeconds / 3600);
    diffSeconds -= hours * 3600;
    minutes = Math.floor(diffSeconds / 60);
    diffSeconds -= minutes * 60;
    seconds = diffSeconds; // Конвертируем мс в соответствующие величины времени
    let days_text = ``;
    let hours_text = ``;
    let minutes_text = ``;
    let seconds_text = ``;
    if(days > 1 || days == 0) {
        days_text = `${days} Days`;
    }
    else {
        days_text = `${days} Day`;
    }
    // Форматируем текст, чтобы день, час, минута или секунда была в ед. или во множественном числе
    // Так же важно учесть, то что в правилах Английского языка 0 считается как множественное число
    // (Предмет как ни странно не может быть единственным)
    if(hours > 1 || hours == 0) {
        hours_text = `${hours} Hours`;
    }
    else {
        hours_text = `${hours} Hour`;
    }

    if(minutes > 1 || minutes == 0) {
        minutes_text = `${minutes} Minutes`;
    }
    else {
        minutes_text = `${minutes} Minute`;
    }

    if(seconds > 1 || seconds == 0) {
        seconds_text = `${seconds} Seconds`;
    }
    else {
        seconds_text = `${seconds} Second`;
    }
    // После преобразования всего этого, меняем внутренний HTML переменной countdown
    countdown.innerHTML = `
        <div class="days">${days_text}</div>
        <div class="hours">${hours_text}</div>
        <div class="minutes">${minutes_text}</div>
        <div class="seconds">${seconds_text}</div>
    `;
}