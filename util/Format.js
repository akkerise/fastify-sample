'use strict'

/**
 * ConvertUtils
*/

/**
 * Convert time client to time server
 * @param {*} timestamp 
 */
const toDateServer = (timestamp) => {
  if (!timestamp) {
    return null;
  }
  const _timestamp = parseInt(timestamp + '');
  return new Date(_timestamp);
};

/**
 * Convert time server to time client
 * @param {*} datetime 
 * @param {*} covert_gmt 
 */
const toDateClient = (datetime) => {
  if (!datetime) {
    return null;
  }
  const timestamp = Date.parse(datetime);
  return timestamp;
};

/**
 * Get current date
 */
const toCurrentDate = () => {
  var todayDate = new Date().toISOString().slice(0, 10) + ' 00:00:00';
  return toDateServer(toDateClient(todayDate, false));
};

const validateEmail = (email) => {
  if (!email) return false;
  if (!email.trim()) return false;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validatePhone = (phone) => {
  if (!phone) return false;
  if (!phone.trim()) return false;
  var re = /((02|03|05|06|07|08|09)+([0-9]{8})\b)/g;
  return re.test(String(phone).toLowerCase());
}

const toTxtUnsigned = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') return '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");

  return str;
}

module.exports = {
  toDateServer,
  toDateClient,
  toCurrentDate,
  validateEmail,
  validatePhone,
  toTxtUnsigned
}