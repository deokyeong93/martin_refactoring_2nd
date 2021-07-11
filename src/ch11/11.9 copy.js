function score(candidate, medicalExam, scoringGuide) {
  let result;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel = 10;
    highMedicalRiskFlag = true;
  }

  let certificationGrade = "regular";
  if (scoringGuide.stateWithLowCertification(candidate.originState)) {
    certificationGrade = "low";
    result -= 5;
  }
  // 비슷한 코드가 한참 이어짐
  result -= Math.max(healthLevel - 5, 0);
  return result;
}

class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this._cadidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  scoreSmoker() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel = 10;
      this._highMedicalRiskFlag = true;
    }
  }

  excute() {
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoker();
    let certificationGrade = "regular";
    if (
      this._scoringGuide.stateWithLowCertification(this._cadidate.originState)
    ) {
      certificationGrade = "low";
      this._result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }
}
