let highPriorityCount;

class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    if (value instanceof Priority) return value;
    this._value = value;
  }
  toString() {
    return this._value;
  }
  onstructor(value) {
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) {
      thie._value = value;
    } else {
      throw new Error(`<${value}> is invalid for Priority`);
    }
  }
  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
  equals(other) {
    return this._index === other._index;
  }
  higherThan(other) {
    return this._index > other._index;
  }
  lowerThan(other) {
    return this._index < other._index;
  }
}

highPriorityCount = orders.filter(
  (o) => "high" === o.priority.toString() || "rush" === o.priority.toString()
).length;
