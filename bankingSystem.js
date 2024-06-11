// BankAccount class
class BankAccount {
    constructor(account_number, owner, balance = 0) {
        this.account_number = account_number;
        this.owner = owner;
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        } else {
            throw new Error("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else {
            throw new Error("Invalid withdrawal amount");
        }
    }
}

// SavingsAccount class (inherits from BankAccount)
class SavingsAccount extends BankAccount {
    constructor(account_number, owner, balance = 0, interest_rate = 0.01) {
        super(account_number, owner, balance);
        this.interest_rate = interest_rate;
    }

    apply_interest() {
        this._balance += this._balance * this.interest_rate;
    }
}

// CheckingAccount class (inherits from BankAccount)
class CheckingAccount extends BankAccount {
    constructor(account_number, owner, balance = 0, overdraft_limit = 100) {
        super(account_number, owner, balance);
        this.overdraft_limit = overdraft_limit;
    }

    withdraw(amount) {
        if (amount > 0 && this._balance + this.overdraft_limit >= amount) {
            this._balance -= amount;
        } else {
            throw new Error("Overdraft limit exceeded or invalid withdrawal amount");
        }
    }
}

// Example usage
const mySavingsAccount = new SavingsAccount("SA123", "John Doe", 1000, 0.02);
mySavingsAccount.apply_interest();
console.log(mySavingsAccount.balance); // Updated balance after interest applied

const myCheckingAccount = new CheckingAccount("CA456", "Jane Smith", 500, 200);
myCheckingAccount.withdraw(300); // Valid withdrawal
console.log(myCheckingAccount.balance); // Updated balance after withdrawal
