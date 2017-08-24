export default function getDateDiff(dateTimeStamp) {
  let minute = 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let now = Math.floor(Date.now() / 1000);
  let diffValue = now - dateTimeStamp;
  if (diffValue < 0) { return; }
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  var result = '';
  if (monthC >= 1) {
    result = "" + Math.floor(monthC) + "月前";
  } else if (weekC >= 1) {
    result = "" + Math.floor(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + Math.floor(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + Math.floor(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + Math.floor(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}
