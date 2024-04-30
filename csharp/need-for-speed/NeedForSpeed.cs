using System;

class RemoteControlCar
{
    // Fields to store car properties
    private int speed;
    private int batteryDrain;
    private int distanceDriven;
    private int batteryCharge;

    // Constructor for RemoteControlCar
    public RemoteControlCar(int speed, int batteryDrain)
    {
        // Initialize car properties with provided values
        this.speed = speed;
        this.batteryDrain = batteryDrain;
        // Initially, the car has driven no distance and has full battery charge
        this.distanceDriven = 0;
        this.batteryCharge = 100;
    }

    // Method to check if the battery is drained
    public bool BatteryDrained()
    {
        // Battery is considered drained if its charge is less than the drain required for driving
        return batteryCharge < batteryDrain;
    }

    // Method to get the distance driven by the car
    public int DistanceDriven()
    {
        // Return the distance driven by the car
        return distanceDriven;
    }

    // Method to simulate driving the car
    public void Drive()
    {
        // If the battery is not drained and there's enough charge, drive the car
        if (!BatteryDrained() && batteryCharge >= batteryDrain)
        {
            // Increase the distance driven by the car based on its speed
            distanceDriven += speed;
            // Decrease the battery charge based on the drain required for driving
            batteryCharge -= batteryDrain;
        }
    }

    // Static method to create a RemoteControlCar with nitro boost
    public static RemoteControlCar Nitro()
    {
        // Create a RemoteControlCar with higher speed and battery drain for nitro boost
        return new RemoteControlCar(50, 4);
    }
}

class RaceTrack
{
    // Field to store the distance of the race track
    private int distance;

    // Constructor for RaceTrack
    public RaceTrack(int distance)
    {
        // Initialize the race track distance with the provided value
        this.distance = distance;
    }

    // Method to try finishing the track with a given car
    public bool TryFinishTrack(RemoteControlCar car)
    {
        // Drive the car until its battery is drained
        while (!car.BatteryDrained())
        {
            car.Drive();
        }
        // Return true if the car has driven at least the distance of the race track
        return car.DistanceDriven() >= distance;
    }
}
