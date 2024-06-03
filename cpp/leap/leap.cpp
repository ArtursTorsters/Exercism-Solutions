#include "leap.h"

namespace leap {
     bool is_leap_year(int year) {
        // Leap years are divisible by 4
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                return year % 400 == 0;
            }
            return true;
        }
        return false;
    }
}



