const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Given the final numerical grade of a student', () => {
  it('When grade is 95-100, then student gets an O', () => {
    // Arrange
    const grade = 96;
    // Act
    const letterGrade = gradeClassifier(grade)
    // Assert
    expect(letterGrade).toMatch("O | Outstanding")
  });
  it('When grade is 90 - 94.99, then student gets a V', ()=>{
    const grade = 94.99;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("V | Very Good")
  })
  it('When grade is 85 - 89.99, then student gets a G', ()=>{
    const grade = 86;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("G | Good")
  })
  it('When grade is 80 - 84.99, then student gets a S', ()=>{
    const grade = 84.5;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("S | Satisfactory")
  })
  it('When grade is 75 - 79.99, then student gets a N', ()=>{
    const grade = 77;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("N | Needs Improvement")
  })
  it('When grade is below 74.99, then student gets a V', ()=>{
    const grade = 60;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("D | Did not Meet Expectation")
  })
  it('When grade is above 100, then student grade is invalid', ()=>{
    const grade = 101;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("Invalid Grade")
  })
  it('When grade is below 0, then student grade is invalid', ()=>{
    const grade = -60;
    const letterGrade = gradeClassifier(grade)

    expect(letterGrade).toMatch("Invalid Grade")
  })
});
