function isISOString(str: string) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(str)
}

export default function getPeriod(startTime: string, endTime: string) {
  if (!isISOString(startTime)) {
    console.warn('startTime is invalid', startTime) // eslint-disable-line no-console
    return '--:--:--'
  }

  if (!isISOString(endTime)) {
    console.warn('endTime is invalid', endTime) // eslint-disable-line no-console
    return '--:--:--'
  }

  const start = Date.parse(startTime)
  const end = Date.parse(endTime)

  const diffSecondTime = Math.abs(Math.floor((end - start) / 1000))
  const hour = Math.floor(diffSecondTime / 60 ** 2)
  const minute = Math.floor(diffSecondTime / 60) - hour * 60
  const second = diffSecondTime % 60

  return `${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}:${second.toString().padStart(2, '0')}`
}
