'use strict'

const numbers = [1, 5, 7, 10, 12, 15];
const strings = ["one", "two", "three"];

function printArrayByForEach(array) {
    console.log("Printing array by foreach()...");
    array.forEach(function (value, index, array) {
        console.log(`${index}: ${value} внутри массива ${array}`)
    })
}

function printArrayByForOff(array) {
    console.log("Printing array by for off()");
    for (let key of array) {
        console.log(key)
    }
}

printArrayByForEach(numbers);
printArrayByForEach(strings);

printArrayByForOff(numbers);
printArrayByForOff(strings);

const data = {
    id: 1,
    title: "document",
    scope: {
        issued: "FNS department",
        date: "10.01.1971"
    }
};

const cloneData = Object.assign({}, data);
cloneData.id = 2;

console.log(data);
console.log(cloneData);

const video = ['youtube', 'vimeo', 'rutube', 'instagramm_reels'];
const blogs = ['twitter', 'livejournal'];
const internet = [...video, ...blogs, "tik-tock"];

console.log(internet);

function sum(a, b) {
    return a + b;
}

const additions = [5, 10];

console.log(sum(...additions));

const wallet = {
    balance: 3e6,
    currency: "rub",
    accounts: {
        number: "408178105000001234",
        balance: 150000,
    }
};

const walletBackup = {...wallet};
walletBackup.accounts.balance += 5000;

console.log(wallet);
console.log(walletBackup);

//Create objects
const auto = {
    engine: "dvs",
    wheelsRadius: 16,
    startEngene: function () {
        console.log("Vrum-vrum-vrum-vrum...");
    },
};

// const toyota = Object.create(auto);
// const toyota = new Object(auto);
const toyota = {
    wheelsRadius: 14,
};
toyota.__proto__ = auto;

const tesla = Object.create(auto);
tesla.engine = "electricity";

console.log(toyota.engine);
console.log(toyota.wheelsRadius);
toyota.startEngene();

console.log(tesla.engine);
console.log(tesla.wheelsRadius);
tesla.startEngene();