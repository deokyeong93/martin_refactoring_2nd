class TrackingInformation {
  constructor(shippingCompany, trackingNumber) {
    this._shippingCompany = shippingCompany;
    this._trackingNumber = trackingNumber;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    return (this._shippingCompany = arg);
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany} : ${this.trackingNumber}`;
  }
}

class Shipment {
  constructor(trackingInformation) {
    this._trackingInformation = trackingInformation;
  }

  get trackingInfo() {
    return `${this.shippingCompany} : ${this.trackingNumber}`;
  }
  get shippingCompany() {
    return this._trackingInformation._shippingCompany;
  }
  get trackingNumber() {
    return this._trackingInformation.trackingNumber;
  }
  set shippingCompany(arg) {
    this._trackingInformation._shippingCompany = arg;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

let aShipment = new Shipment(new TrackingInformation("deokShip", 1020));
const request = {
  vendor: "정승네트워크",
};

aShipment.shippingCompany = request.vendor;
