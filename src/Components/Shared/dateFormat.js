const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
class dateFormat {
  static getDayNum = function (date) {
    if (date) {
      var dt = new Date(date);
      return dt.getDate();
    }
  };
  static getDay = function (date) {
    if (date) {
      var dt = new Date(date);
      return dt.toLocaleString("en-us", {weekday: "long"});
    }
  };

  static getMonth = function (date) {
    if (date) {
      var dt = new Date(date);
      return month[dt.getMonth()];
    }
  };

  static getYear = function (date) {
    if (date) {
      var dt = new Date(date);
      return dt.getFullYear();
    }
  };
}
export default dateFormat;
