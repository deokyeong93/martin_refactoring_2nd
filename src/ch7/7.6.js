class Shipment {
  constructor(trackInformation) {
    this._trackingInformation = trackInformation;
    this._trackingNumber = trackInformation.trackingNumber;
    this._shippingCompany = trackInformation.shippingCompany;
  }

  get trackingInfo() {
    return `${this.shippingCompany} : ${this.trackingNumber}`;
  }
  get trackInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    return (this._trackingNumber = arg);
  }
}

const request = { vendor: "정승네트워크" };
const aShipment = new Shipment(new TrackingInformation("덕형상사", 0514));

aShipment.shippingCompany = request.vendor;
