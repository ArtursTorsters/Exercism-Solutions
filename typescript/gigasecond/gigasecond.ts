

export class Gigasecond {
  constructor(private startDate: Date) {}

  public date(): Date {
    const gigasecondInMillis = 1e12 // 1,000,000,000 seconds in milliseconds
    const endDate = new Date(this.startDate.getTime() + gigasecondInMillis)


    return endDate
  }
}


