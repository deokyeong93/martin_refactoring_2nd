class Person {
  /**
   * constructor와 setter일부는 생략
   */
  get name() {
    return this._name;
  }
  get medicalTreatments() {
    return this._medical.treatments;
  }
  // get vaccinationRecord() { 삭제 예정 : 클래스 인라인 하기 사용
  //   return this._vaccinationRecord;
  // }
  get dateFirstDose() {
    return this._dateFirstDose;
  }
  get dateSecondDose() {
    return this._dateSecondDose;
  }
  get isImmune() {
    return this.dateFirstDose != null && this.dateSecondDose != null;
  }
  get Last2WeeksMedicalRecord() {
    let records = this.medicalTreatments();
    let date2wAgo = dateTwoWeeksAgo();
    return records.filter((record) => record.date >= date2wAgo);
  }
  get isReadyForDose() {
    for (let record of this.Last2WeeksMedicalRecord) {
      // 임시변수 질의 함수 바꾸기
      if (cannotJab(record)) {
        return false;
      }
    }
    return true;
  }

  addDose(date) {
    this.dateSecondDose = date;
  }
}

function main(person) {
  if (person.isReadyForDose) {
    // let vRecord = person.vaccinationRecord();  (삭제~)
    person.addDose(new Date()); // 위임 숨기기
  }

  console.log(
    `${person.name()} 씨는 면역을 획득${
      person.isImmune() ? "하였" : "하지않았"
    }습니다`
  );
}
