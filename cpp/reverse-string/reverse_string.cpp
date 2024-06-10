#include "reverse_string.h"
#include <string>
using namespace std;

namespace reverse_string {
    string reverse_string(string myString){
        for (size_t i = 0; i < myString.size() / 2; i++){
            swap(myString[i], myString[myString.size() - i - 1]);
        }
        return myString;
    }
}  // namespace reverse_string




