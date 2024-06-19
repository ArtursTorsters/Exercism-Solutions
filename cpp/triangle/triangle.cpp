#include "triangle.h"
#include <stdexcept>

namespace triangle {
flavor kind(double a, double b, double c){
    if(a+b >= c && b+c >=a && a+c>= b){
        if(a == 0 && b == 0 && c == 0){throw std::domain_error("Not a triangle");}
        if(a == b && a == c){
            return flavor::equilateral;
        }
        if(a == b || b == c || a == c){
            return flavor::isosceles;
        }
        if((a != b) && (a!=c) && (b != c)){ 
            return flavor::scalene;
        }
    }
    throw std::domain_error("Not a Triangle");
}    
}  // namespace triangle

