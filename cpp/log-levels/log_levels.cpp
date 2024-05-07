#include <string>

namespace log_line {
    std::string message(std::string line) {
        // Find the position of the first colon (':')
        int colon_pos = line.find(":");
        
        // Return the substring after the colon (message)
        return line.substr(colon_pos + 2);
    }

    std::string log_level(std::string line) {
        // Find the position of the first closing bracket (']')
        int closing_bracket_pos = line.find("]");
        
        // Return the substring between the first character and the closing bracket (log level)
        return line.substr(1, closing_bracket_pos - 1);
    }

    std::string reformat(std::string line) {
        // Find the position of the first colon (':')
        int colon_pos = line.find(":");
        
        // Extract the content between the square brackets ('[' and ']') and format it
        std::string log_level_content = "(" + line.substr((line.find("[") + 1), line.find("]") - 1) + ")";
        
        // Return the message followed by the reformatted log level
        return line.substr(colon_pos + 2) + " " + log_level_content;
    }
}
