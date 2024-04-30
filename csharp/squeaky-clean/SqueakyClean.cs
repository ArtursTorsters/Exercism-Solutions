using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Globalization;

public static class Identifier
{
    public static string Clean(string identifier)
    {
        // Replace white spaces with underscores
        identifier = Regex.Replace(identifier, @" ", "_");

        // Replace null characters with "CTRL"
        identifier = Regex.Replace(identifier, @"\0", "CTRL");

        // Convert the first character after a hyphen to uppercase
        identifier = Regex.Replace(identifier, @"(?<=-)\w", match => match.Value.ToUpper());

        // Remove non-word characters, digits, and Greek letters from the identifier
        identifier = Regex.Replace(identifier, @"\W|\d|[α-ω]", "");

        // Return the cleaned identifier
        return identifier;
    }
}
