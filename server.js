const reducer = (previousValue, currentValue) => previousValue + currentValue;
var user = {
  firstName: "John",
  lastName: "joy",
  bankName: "Abc bank",
  accountNo: "7854216326596262",

  transcationhistory: [],
  deposit: function (amount) {
    this.transcationhistory.push(amount);
  },
  balance: [],
  add: function () {
    const save = this.transcationhistory.reduce(reducer);
    this.balance.push(save);
  },
  withdraw: [],
  remove: function (amount) {
    const save = this.balance - amount;
    this.balance[0] = save;
    this.withdraw.push(save);
  },
};

user.deposit(300);
user.deposit(300);
console.log(`Successfully add 600 hundred`);
user.add();
console.log(`your balance is ${user.balance}`);
user.remove(100);
console.log(`amount balance after withdraw of 100 is ${user.balance}`);
console.log(user.balance);
user.remove(100);
console.log(`amount balance after withdraw of 100 is ${user.balance}`);
console.log(user.balance);
console.table(user.transcationhistory);
