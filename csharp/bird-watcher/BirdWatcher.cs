using System;

class BirdCount
{
    private int[] birdsPerDay;

    public BirdCount(int[] birdsPerDay)
    {
        this.birdsPerDay = birdsPerDay;
    }

    public static int[] LastWeek()
    {
      int[] numbers = [0, 2, 5, 3, 7, 8, 4];
      return numbers;
    }

    public int Today()
    {
  
  return birdsPerDay[6];

    }

    public void IncrementTodaysCount()
    {

birdsPerDay[6]++;


    }
    public bool HasDayWithoutBirds()

        

          

    {

        

          

        bool hasDayWithoutBirds = false;

        

          

        foreach (int birds in birdsPerDay)

        

          

        {

        

          

            if (birds == 0)

        

          

            {

        

          

                hasDayWithoutBirds = true;

        

          

                break;

        

          

            }

        

          

        }

        

          

        return hasDayWithoutBirds;

        

          

    }

        

          


        

          

    public int CountForFirstDays(int numberOfDays)

        

          

    {

        

          

        int sum = 0;

        

          

        for (int i = 0; i < numberOfDays; i++)

        

          

        {

        

          

            sum += birdsPerDay[i];

        

          

        }

        

          

        return sum;

        

          

    }

        

          


        

          

    public int BusyDays()

        

          

    {

        

          

        int busyDays = 0;

        

          

        foreach (int birds in birdsPerDay)

        

          

        {

        

          

            if (birds >= 5)

        

          

            {

        

          

                busyDays++;

        

          

            }

        

          

        }

        

          

        return busyDays;

        

          

    }

        

          

}