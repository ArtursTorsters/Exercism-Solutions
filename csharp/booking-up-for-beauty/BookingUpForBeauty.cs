using System;

static class Appointment
{
    // Method to schedule an appointment by parsing a string into a DateTime object
    //Appointment.Schedule("7/25/2019 13:45:00")
// => new DateTime(2019, 7, 25, 13, 45, 0)
    public static DateTime Schedule(string dateStr) => DateTime.Parse(dateStr);

    // Method to check if an appointment has passed based on its DateTime
    //Appointment.HasPassed(new DateTime(1999, 12, 31, 9, 0, 0))
// => true
    public static bool HasPassed(DateTime appointmentDate) => appointmentDate < DateTime.Now;

    // Method to check if an appointment is in the afternoon (between 12 PM and 6 PM)
    //Appointment.IsAfternoonAppointment(new DateTime(2019, 03, 29, 15, 0, 0))
// => true
    public static bool IsAfternoonAppointment(DateTime aDate) => aDate.Hour >= 12 && aDate.Hour < 18;

    // Method to generate a description of the appointment date and time
    //Appointment.Description(new DateTime(2019, 03, 29, 15, 0, 0))
// => "You have an appointment on 3/29/2019 3:00:00 PM."
    public static string Description(DateTime aDate) => $"You have an appointment on {aDate.ToString("G")}.";

    // Method to return the anniversary date for the current year (fixed date: September 15th)
    //Appointment.AnniversaryDate()
// => new DateTime(2019, 9, 15, 0, 0, 0)
    public static DateTime AnniversaryDate() => new DateTime(DateTime.Now.Year, 9, 15, 0, 0, 0);
}
