#include "grains.h"

namespace grains {

    // Calculate grains on a specific square
    unsigned long long square(unsigned int num) {
        return 1ULL << (num - 1); // Using bitwise left shift for efficiency
    }

    // Calculate total grains on the entire chessboard
    unsigned long long total() {
        unsigned long long totalGrains = 0;
        for (int i = 1; i <= 64; ++i) {
            totalGrains += square(i);
        }
        return totalGrains;
    }

}  // namespace grains
