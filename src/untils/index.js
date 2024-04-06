export const generateUUIDv4 = () => {
  const hexDigits = "0123456789abcdef";
  let uuid = "";
  for (let i = 0; i < 36; i++) {
    if (i === 14) {
      uuid += "4"; // phiên bản 4
    } else if (i === 19) {
      uuid += hexDigits[(Math.random() * 4) | 8];
    } else {
      uuid += hexDigits[(Math.random() * 16) | 0];
    }
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      uuid += "-";
    }
  }
  return uuid;
};

export const convertToDate = (dateString) => {
  // Chuyển đổi chuỗi ngày tháng vào đối tượng Date
  var date = new Date(dateString);

  // Kiểm tra nếu không phải là một đối tượng Date hợp lệ
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Lấy thông tin về ngày, tháng và năm
  var day = ("0" + date.getDate()).slice(-2); // Thêm '0' và lấy hai chữ số cuối cùng
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // Thêm '0' và lấy hai chữ số cuối cùng
  var year = date.getFullYear();

  // Định dạng lại chuỗi ngày tháng theo định dạng của Việt Nam
  var vietnameseDate = day + "/" + month + "/" + year;

  return vietnameseDate;
};
