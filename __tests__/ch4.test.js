import { it, describe, expect, beforeEach } from "@jest/globals";
import { Province, sampleProvinceData } from "../src/ch4/ch4_example.init";

describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall(부족분)", () => {
    // const asia = new Province(sampleProvinceData()); // 픽스처(고정값) 설정
    expect(asia.shortfall).toEqual(5); // 의도한 결과인지 검증!
  });
  it("profit", () => {
    // const asia = new Province(sampleProvinceData());
    expect(asia.profit).toEqual(230);
  });
  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });
  it("zero demand", () => {
    asia.demand = 0;
    expect(asia.shortfall).toEqual(-25);
    expect(asia.profit).toEqual(0);
  });
  it("negative demand", () => {
    // 수요가 마이너스 이다.
    asia.demand = -1;
    expect(asia.shortfall).toEqual(-26);
    expect(asia.profit).toEqual(-10);
  });
  it("empty string demand", () => {
    asia.demand = "";
    expect(asia.shortfall).toBeNaN;
    expect(asia.profit).toBeNaN;
  });
});

describe("no producers", () => {
  // 생산자가 없다.
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No Producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  it("shortfall", () => {
    expect(noProducers.shortfall).toEqual(30);
  });
  it("profit", () => {
    expect(noProducers.profit).toEqual(0);
  });
});

describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).toEqual(0);
  });
});
