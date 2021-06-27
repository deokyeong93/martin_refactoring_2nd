const youngestAge = (people) => {
  return Math.min(...people.map((person) => person.age));
};

const totalSalary = (people) => {
  let totalSalary = 0;
  return people.reduce(
    (totalSalary, person) => (totalSalary += person.salary),
    0
  );
};

return `최연소 : ${youngestAge(people)}, 총 급여 : ${totalSalary(people)}`;
