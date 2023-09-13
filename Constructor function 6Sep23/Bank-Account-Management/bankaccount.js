
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
  }
  
  
  BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} into ${this.name}'s account.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };
  

  BankAccount.prototype.withdraw = function (amount) {
    if (this.active && amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from ${this.name}'s account.`);
    } else {
      console.log("Invalid withdrawal or insufficient balance.");
    }
  };
  
  
  BankAccount.prototype.checkBalance = function () {
    console.log(`${this.name}'s account balance: $${this.balance}`);
  };
  
  
  BankAccount.prototype.isActive = function () {
    return this.active;
  };
  
  
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  
  const account1 = new BankAccount(1234, "Abhishek Kumar", "Savings", 5000);
  const account2 = new BankAccount(5678, "Ritesh Kumar", "Checking", 3000);
  const account3 = new BankAccount(9012, "Shubham Kumar", "Savings", 8000);
  
  
  account1.deposit(1000);
  account2.deposit(500);
  account3.withdraw(2000);
  account1.withdraw(2000);
  
  
  account1.checkBalance();
  account2.checkBalance();
  account3.checkBalance();
  
  
  account2.active = false;

  
  console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
  console.log(`${account2.name}'s account is active: ${account2.isActive()}`);
  console.log(`${account3.name}'s account is active: ${account3.isActive()}`);
  
  
  const accounts = [account1, account2, account3];
  const totalBalance = getTotalBalance(accounts);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
  