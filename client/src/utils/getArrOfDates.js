const MS_PER_DAY = 8.64e7

function subDays(ms, count = 1) {
  return ms - MS_PER_DAY * count
}

function addDays(ms, count = 1) {
  return ms + MS_PER_DAY * count
}

function getSimpleDateObj(dateObj) {
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    day: dateObj.getDate(),
  }
}

function getDay(dateObj) {
  const day = dateObj.getDay()
  return day === 0 ? 6 : day - 1
}

export default function getArrOfDates(countdownDate, numberOfWeeks = 1) {
  const initalDate = countdownDate || new Date()
  const startMs = subDays(+initalDate, getDay(initalDate))

  return new Array(numberOfWeeks * 7)
    .fill(null)
    .map((_, i) => new Date(addDays(startMs, i)))
    .map(getSimpleDateObj)
}
