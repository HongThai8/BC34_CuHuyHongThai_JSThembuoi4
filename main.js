//     <!-- Bài 1 : Tính ngày tháng năm -->
document.getElementById("btnTomorrow").onclick = function () {
  //Dau vao
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var showInfo = "";

  // Xu ly
  if (day === 31 && month === 12) {
    day = 1;
    month = 1;
    year = year + 1;
  } else if (month === 2) {
    if (day === 29 && year % 4 === 0) {
      day = 1;
      month = month + 1;
    } else if (day === 28 && year % 4 != 0) {
      day = 1;
      month = month + 1;
    } else {
      day = day + 1;
    }
  } else if (
    day === 31 &&
    (month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12)
  ) {
    day = 1;
    month = month + 1;
  } else if (
    day === 30 &&
    (month === 4 || month === 6 || month === 9 || month === 11)
  ) {
    day = 1;
    month = month + 1;
  } else {
    day = day + 1;
  }
  showInfo += "<p>" + day + "/" + month + "/" + year + "</p>";

  //ouput
  document.getElementById("thongBaoNgay").innerHTML = showInfo;
};

document.getElementById("btnYesterday").onclick = function () {
  //Dau vao
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var prevMonth = month - 1;
  var showInfo = "";

  // Xu ly
  if (day === 1 && month === 1) {
    day = 31;
    month = 12;
    year = year - 1;
  } else if (day === 1 && month != 1) {
    if (
      prevMonth === 1 ||
      prevMonth === 3 ||
      prevMonth === 5 ||
      prevMonth === 7 ||
      prevMonth === 8 ||
      prevMonth === 10 ||
      prevMonth === 12
    ) {
      day = 31;
      month = prevMonth;
    } else if (prevMonth === 2) {
      if (year % 4 === 0) {
        day = 29;
        month = prevMonth;
      } else {
        day = 28;
        month = prevMonth;
      }
    } else {
      day = 30;
      month = prevMonth;
    }
  } else {
    day = day - 1;
  }

  showInfo += "<p>" + day + "/" + month + "/" + year + "</p>";

  //ouput
  document.getElementById("thongBaoNgay").innerHTML = showInfo;
};

// <!-- Bài 2 : Tính ngày -->
document.getElementById("btnCalDay").onclick = function () {
  //Dau vao
  // var day = document.getElementById("day").value * 1;\
  var days;
  var months = document.getElementById("months").value * 1;
  var years = document.getElementById("years").value * 1;
  var showInfo = "";

  // Xu ly
  if (months === 2) {
    if (years % 4 === 0) {
      days = 29;
    } else {
      days = 28;
    }
  } else if (
    months === 1 ||
    months === 3 ||
    months === 5 ||
    months === 7 ||
    months === 8 ||
    months === 10 ||
    months === 12
  ) {
    days = 31;
  } else {
    days = 30;
  }
  showInfo +=
    "<p>" +
    " Tháng :" +
    months +
    " năm " +
    years +
    " có " +
    days +
    " ngày " +
    "</p>";

  //ouput
  document.getElementById("NotifyDay").innerHTML = showInfo;
};

// <!-- BÀi 3 : Đọc số -->
document.getElementById("btnReadNumber").onclick = function () {
  //Dau vao

  var a = document.getElementById("threeNumber").value * 1;
  var b = parseInt(a);
  b = Math.abs(b);
  var hangTram;
  var hangChuc;
  var hangDonVi;
  var showInfo = "";

  // Xu ly

  a = Math.abs(a);
  switch (Math.floor(a / 100)) {
    case 1:
      hangTram = "một trăm";

      break;
    case 2:
      hangTram = "hai trăm";

      break;
    case 3:
      hangTram = "ba trăm";

      break;
    case 4:
      hangTram = "bốn trăm";

      break;
    case 5:
      hangTram = "năm trăm";

      break;
    case 6:
      hangTram = "sáu trăm";

      break;
    case 7:
      hangTram = "bảy trăm";

      break;
    case 8:
      hangTram = "tám trăm";

      break;
    case 9:
      hangTram = "chín trăm";

      break;
    default:
      hangTram = "";
  }
  var b = a % 100;
  switch (Math.floor(b / 10)) {
    case 1:
      hangChuc = "mười";

      break;
    case 2:
      hangChuc = "hai mươi";

      break;
    case 3:
      hangChuc = "ba mươi";

      break;
    case 4:
      hangChuc = "bốn mươi";

      break;
    case 5:
      hangChuc = "năm mươi";

      break;
    case 6:
      hangChuc = "sáu mươi";

      break;
    case 7:
      hangChuc = "bảy mươi";

      break;
    case 8:
      hangChuc = "tám mươi";

      break;
    case 9:
      hangChuc = "chín mươi";

      break;
    default:
      if (hangTram != "" && a % 10 != 0) {
        hangChuc = "lẻ";
      } else {
        hangChuc = "";
      }
  }
  var c = a % 10;
  switch (c) {
    case 1:
      if (hangChuc != "" && hangChuc !== "lẻ" && hangChuc !== "mười") {
        hangDonVi = "mốt";
      } else hangDonVi = "một";

      break;
    case 2:
      hangDonVi = "hai";

      break;
    case 3:
      hangDonVi = "ba";

      break;
    case 4:
      hangDonVi = "bốn";

      break;
    case 5:
      if (hangChuc != "" && hangChuc !== "lẻ") {
        hangDonVi = "lăm";
      } else hangDonVi = "năm";

      break;
    case 6:
      hangDonVi = "sáu";

      break;
    case 7:
      hangDonVi = "bảy";

      break;
    case 8:
      hangDonVi = "tám";

      break;
    case 9:
      hangDonVi = "chín";

      break;
    default:
      if (hangTram != "" || hangChuc != "") {
        hangDonVi = "";
      } else {
        hangDonVi = "không";
      }
  }

  showInfo += "<p>" + hangTram + " " + hangChuc + " " + hangDonVi + "</p>";

  //ouput
  document.getElementById("readNumber").innerHTML = showInfo;
};
// <!-- Bài 4 : Tìm sinh viên xa trường nhất -->
document.getElementById("btnFind").onclick = function () {
  //Dau vao
  var nameOne = document.getElementById("nameOne").value;
  var xOne = document.getElementById("xOne").value * 1;
  var yOne = document.getElementById("yOne").value * 1;

  var nameTwo = document.getElementById("nameTwo").value;
  var xTwo = document.getElementById("xTwo").value * 1;
  var yTwo = document.getElementById("yTwo").value * 1;

  var nameThree = document.getElementById("nameThree").value;
  var xThree = document.getElementById("xThree").value * 1;
  var yThree = document.getElementById("yThree").value * 1;

  var distance_1, distance_2, distance_3;
  var furthest_stu, furthest_x, furthest_y;
  var showInfo1 = "";

  // Xu ly
  xOne = parseFloat(xOne);
  xTwo = parseFloat(xTwo);
  xThree = parseFloat(xThree);
  yOne = parseFloat(yOne);
  yTwo = parseFloat(yTwo);
  yThree = parseFloat(yThree);

  distance_1 = Math.pow(xOne, 2) + Math.pow(yOne, 2);
  distance_1 = Math.sqrt(distance_1);

  distance_2 = Math.pow(xTwo, 2) + Math.pow(yTwo, 2);
  distance_2 = Math.sqrt(distance_2);

  distance_3 = Math.pow(xThree, 2) + Math.pow(yThree, 2);
  distance_3 = Math.sqrt(distance_3);
  if (distance_1 < distance_2 && distance_1 < distance_3) {
    furthest_stu = nameOne;
    furthest_x = xOne;
    furthest_y = yOne;
  } else if (distance_2 < distance_1 && distance_2 < distance_3) {
    furthest_stu = nameTwo;
    furthest_x = xTwo;
    furthest_y = yTwo;
  } else {
    furthest_stu = nameThree;
    furthest_x = xThree;
    furthest_y = yThree;
  }

  showInfo1 += "<p>" + "Sinh viên xa trường nhất : " + furthest_stu + "</p>";

  //ouput
  document.getElementById("farFromHome").innerHTML = showInfo1;
};
