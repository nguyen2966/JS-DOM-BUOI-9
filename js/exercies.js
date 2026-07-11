import { validateNumber } from "./helper.js";

export const excercises = [
  {
    "icon": "💰",
    "title": "Tính tiền lương nhân viên",
    "inputs": [
      "Nhập lương một ngày",
      "Nhập số ngày làm"
    ],
    "activate": "Tính lương",
    calculateSalary: (dailySalary, numOfDays) => {
      if(!validateNumber(dailySalary) || !validateNumber(numOfDays)) return "Dữ liệu không hợp lệ";

      numOfDays = Number(numOfDays);
      dailySalary = Number(dailySalary);

      return (dailySalary * numOfDays).toFixed(2);
    }

  },
  {
    "icon": "📚",
    "title": "Tính giá trị trung bình",
    "inputs": [
      "Nhập số thứ 1",
      "Nhập số thứ 2",
      "Nhập số thứ 3",
      "Nhập số thứ 4",
      "Nhập số thứ 5",
    ],
    "activate": "Tính trung bình",
    calculateAverage: (nums) => {
      let sum = 0;
      console.log(nums);
      for (let num of nums) {
        if (!validateNumber(num)) return "Số liệu không hợp lệ";
        num = Number(num);
        sum += num;
      }
      console.log(sum);
      return (sum / 5).toFixed(2);
    },
  },

  {
    "icon": "💱",
    "title": "Quy đổi tiền",
    "inputs": [
      "Nhập số tiền USD"
    ],
    "activate": "Quy đổi",
    calculateCurrency: (usdAmount) => {
     if(!validateNumber(usdAmount)) return "Dữ liệu không hợp lệ";

      usdAmount = Number(usdAmount);

      let vndAmount = usdAmount * 23500;
      vndAmount = new Intl.NumberFormat('vn-VN').format(vndAmount);

      return vndAmount;
    },
  },
  {
    "icon": "📏",
    "title": "Tính diện tích, chu vi hình chữ nhật",
    "inputs": [
      "Nhập chiều dài",
      "Nhập chiều rộng"
    ],
    "activate": "Tính",
    calculateRectangle: (width, height) => {
      if(!validateNumber(width) || !validateNumber(height)) return "Dữ liệu không hợp lệ";

      width = Number(width);
      height = Number(height);

      let circular = ((width + height) * 2).toFixed(2);
      let square = (width * height).toFixed(2);

      return `Chu vi: ${circular}; Diện tích: ${square}`;
    }
  },
  {
    "icon": "🧮",
    "title": "Tính tổng hai kí số",
    "inputs": [
      "Nhập số nguyên có 2 chữ số",
    ],
    "activate": "Tính",
    calculate2Digits: (num) => {
      if(!validateNumber(num)) return "Dữ liệu không hợp lệ";

      if(num < 10 || num >=100 ) return "Dữ liệu phải là số có 2 chữ số nguyên";

      if(num - parseInt(num) > 0) return "Dữ liệu phải là số nguyên";

      num = Number(num);

      let res = (num % 10) + parseInt(num/10);
      return res;
    }
  }

]