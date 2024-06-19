#include "space_age.h"

namespace space_age {
    space_age::space_age(double sec) : _seconds(sec){    }

//This returns the stored number of seconds.
    double space_age::seconds() const { 
        return _seconds; 
    }
    // This calculates the age in Earth years. There are 31,557,600 seconds in an Earth year.
    double space_age::on_earth() const {
        return _seconds / 31557600.0;
    }


//Each of these methods first calculates the age in Earth years and 
// then divides it by the relative orbital period of the respective planet compared to Earth
    double space_age::on_mercury() const{
        return on_earth() / 0.2408467;
    }

    double space_age::on_venus() const {
        return on_earth() / 0.61519726;
    }
    
    double space_age::on_mars() const {
        return on_earth() / 1.8808158;
    }

    double space_age::on_jupiter() const {
        return on_earth() / 11.862615;
    }
    
    double space_age::on_saturn() const {
        return on_earth() / 29.447498;
    }
    
    double space_age::on_uranus() const {
        return on_earth() / 84.016846;
    }
    
    double space_age::on_neptune() const {
        return on_earth() / 164.79132;
    }
    
}  // namespace space_age





#if !defined(SPACE_AGE_H)
#define SPACE_AGE_H

namespace space_age {
    class space_age {
    public:
        explicit space_age(double sec);
        double seconds() const;
        double on_earth() const;
        double on_mercury() const;
        double on_venus() const;
        double on_mars() const;
        double on_jupiter() const;
        double on_saturn() const;
        double on_uranus() const;
        double on_neptune() const;
        
    private:
        double _seconds;
    };
}  // namespace space_age

#endif // SPACE_AGE_H