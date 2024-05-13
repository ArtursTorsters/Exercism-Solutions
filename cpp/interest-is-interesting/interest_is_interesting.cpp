// interest_rate returns the interest rate for the provided balance.
double interest_rate(double balance) {
    if (balance < 0) {
        // If balance is less than 0, return 3.213%
        return 3.213;
    } else if (balance < 1000) {
        // If balance is at least 0 and less than 1000, return 0.5%
        return 0.5;
    } else if (balance < 5000) {
        // If balance is at least 1000 and less than 5000, return 1.621%
        return 1.621;
    } else {
        // If balance is 5000 or more, return 2.475%
        return 2.475;
    }
}

double yearly_interest(double balance) {
    double rate = interest_rate(balance); // Get the interest rate based on the balance

    // Calculate and return the yearly interest
    return balance * (rate / 100.0); // Divide rate by 100 to convert percentage to decimal
}

double annual_balance_update(double balance) {
    double yearly_interest_amount = yearly_interest(balance); // Get the yearly interest
    return balance + yearly_interest_amount; // Update the balance with the yearly interest
}

int years_until_desired_balance(double balance, double target_balance) {
    int years = 0;
    while (balance < target_balance) {
        balance = annual_balance_update(balance); // Update the balance annually
        years++; // Increment the number of years
    }
    return years;
}
