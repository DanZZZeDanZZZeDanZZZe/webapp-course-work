export default function getDateFromStr(date, time) {
  const dateArr = date
    .split('.')
    .map((i) => +i)
    .reverse()
  dateArr[1] = dateArr[1] - 1
  return new Date(...dateArr, ...time.split(':'))
}
