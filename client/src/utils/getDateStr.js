export default function getDateStr(dateObj) {
  const { day, year, month } = dateObj
  return `${day}.${month}.${year}`
}
