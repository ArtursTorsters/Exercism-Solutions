


export class BankAccount {
  constructor() {
    this.accountStatus = false
  }

  // The open method opens the bank account
  open() {
    if (this.accountStatus === false) { // Check if the account is closed
      this.accountBalance = 0; // Set the balance to 0
      this.accountStatus = true; // Set the accountStatus to true (open)
    } else {
throw new ValueError("error.")
    }
  }

  close() {
    if (this.accountStatus === true) { // Check if the account is closed
      this.accountBalance = 0; // Set the balance to 0
      this.accountStatus = false; // Set the accountStatus to true (open)
    } else {
      throw new ValueError("error.")
          }
  }

  deposit(amount) {
    if (this.accountStatus === true) { // Check if the account is open
      if (amount > 0) { // Ensure the deposit amount is positive
        this.accountBalance += amount; // Add the deposit amount to the balance
      } else {
        throw new ValueError('Deposit amount must be positive');
      }
    } else {
      throw new ValueError('This account is closed.');
    }
  }
  

  withdraw(amount) {
    if (this.accountStatus === true) { // Check if the account is open
      if (amount > 0) { // Ensure the withdrawal amount is positive
        if (amount <= this.balance) { // Ensure sufficient funds
          this.accountBalance -= amount; // Subtract the withdrawal amount from the balance
        } else {
          throw new ValueError('Insufficient funds');
        }
      } else {
        throw new ValueError('Withdrawal amount must be positive');
      }
    } else {
      throw new ValueError('This account is closed.');
    }
  }


  get balance(){

    if(this.accountStatus === true){
      return this.accountBalance;
    }else{
      throw new ValueError("This account is closed.");
    }
  }

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

