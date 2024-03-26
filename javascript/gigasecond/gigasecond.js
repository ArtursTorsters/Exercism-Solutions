//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  const dateInMillis = startDate.getTime()
  const totalInMillis = dateInMillis + 1000000000000

  const backDate = new Date(totalInMillis)

  return backDate
}


