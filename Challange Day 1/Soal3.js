console.log("=====================Soal 3=======================");

function konversiMenit(menit) {
  let hour = "";
  let minute = "";
  if (menit >= 60) {
    hour += Math.floor(menit / 60);
    minute += menit - hour * 60;
    if (minute.length === 1) {
      minute = "0" + minute;
    }
    time = hour + ":" + minute;
  } else if (menit < 60) {
    minute += menit;
    if (minute.length === 1) {
      minute = "0" + minute;
    }
    time = "0:" + minute;
  }
  return time;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
