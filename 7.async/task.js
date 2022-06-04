class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Параметр id не передан в метод addClock()");
    }

    if (this.alarmCollection.some((item) => item.id === id)) {
      console.error("Звонок с данным id ${id} уже зарегестрирован!");
      return;
    }
    this.alarmCollection.push({ id, time, callback });
  }

  removeClock(id) {
    let alarmLength = this.alarmCollection.length;
    let filterId = this.alarmCollection.findIndex((item) => item.id === id);
    this.alarmCollection.splice(filterId, 1);
    if (this.alarmCollection.length < alarmLength) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime(timeValue) {
    let currentTime;
    if (timeValue === undefined) {
      currentTime = new Date();
    } else {
      currentTime = timeValue;
    }
    let hours;
    let minutes;

    if (currentTime.getHours() < 10) {
      hours = `0${currentTime.getHours()}`;
    } else {
      hours = `${currentTime.getHours()}`;
    }

    if (currentTime.getMinutes() < 10) {
      minutes = `0${currentTime.getMinutes()}`;
    } else {
      minutes = `${currentTime.getMinutes()}`;
    }
    return `${hours}:${minutes}`;
  }


  start() {
    let checkAlarm = checkClock.bind(this);
    function checkClock(alarm) {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(
        () => this.alarmCollection.forEach((item) => checkAlarm(item)),
        1000
      );
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник №${item.id} заведен на ${item.time}`)
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}


// Пример
function testCase() {
  let myAlarm = new AlarmClock();
  myAlarm.addClock(myAlarm.getCurrentFormattedTime(), () => console.log('Пора вставать!'), 1);
  let currentTime = new Date();
  currentTime.setMinutes(currentTime.getMinutes() + 1);
  myAlarm.addClock(myAlarm.getCurrentFormattedTime(currentTime), () => { console.log('Давно пора вставать!'); myAlarm.removeClock(2) }, 2);
  currentTime = new Date();
  currentTime.setMinutes(currentTime.getMinutes() + 2);
  myAlarm.addClock(myAlarm.getCurrentFormattedTime(currentTime), () => {
    console.log('Давно уже пора вставать!');
    myAlarm.stop();
    myAlarm.clearAlarms();
  }, 3);
  myAlarm.printAlarms();
  myAlarm.start();
}
