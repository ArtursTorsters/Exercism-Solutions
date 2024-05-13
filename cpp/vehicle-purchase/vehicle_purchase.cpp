#include "vehicle_purchase.h"

namespace vehicle_purchase {

    // needs_license determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
    bool needs_license(std::string kind){
        // TODO: Return true if you need a license for that kind of vehicle.
        if(kind == "car" || kind == "truck") {
            return true;
        }
        return false;
    }

    // choose_vehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
    std::string choose_vehicle(std::string option1, std::string option2) {
        // TODO: Return the final decision in a sentence.
         if (option1 < option2) {
        return option1 + " is clearly the better choice.";
    } else {
        return  option2 + " is clearly the better choice.";
    }
        
        return "not yet implemented";
    }

    // calculate_resell_price calculates how much a vehicle can resell for at a certain age.
double calculate_resell_price(double original_price, double age) {
    if (age < 3) {
        // If less than 3 years old, it costs 80% of the original price
        return 0.8 * original_price;
    } else if (age >= 10) {
        // If at least 10 years old, it costs 50% of the original price
        return 0.5 * original_price;
    } else {
        // If at least 3 years old but less than 10 years, it costs 70% of the original price
        return 0.7 * original_price;
    }
}

}  // namespace vehicle_purchase