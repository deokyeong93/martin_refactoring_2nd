let customerData = {
  1920: {
    name: "마틴 파울러",
    id: "1920",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 나머지 달(month)은 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 나머지 달(month)은 생략
      },
    },
  },
  38673: {
    name: "닐 포드",
    id: "38673",
    usages: {
      2016: {
        1: 50,
        2: 55,
        // 나머지 달(month)은 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 나머지 달(month)은 생략
      },
    },
  },
};

customerData = new CustomerData(customerData);

function getCustomerData() {
  return customerData;
}
function getRawDataOfCustomers() {
  return customerData;
}
function setRawDataOfCustomers(arg) {
  customerData = arg;
}
function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

function compareUsage(customerID, laterYear, month) {
  const later =
    getRawDataOfCustomers().rawData[customerID].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers().rawData[customerID].usages[lateYear - 1][month];
  return { laterAmount: later, change: later - earlier };
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}
