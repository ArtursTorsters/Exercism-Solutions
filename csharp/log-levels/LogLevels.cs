
static class LogLine
{
    public static string Message(string logLine)
    {
        return logLine
            .Split(": ")[1]
            .Replace("\t", "")
            .Replace("\r", "")
            .Replace("\n", "")
            .Replace("  ", " ")
            .TrimStart()
            .TrimEnd();
    }

    public static string LogLevel(string logLine)
    {
        return logLine.Substring(1, logLine.IndexOf("]") - 1).ToLower();
    }

    public static string Reformat(string logLine)
    {
        return $"{LogLine.Message(logLine)} ({LogLine.LogLevel(logLine)})";
    }
}
