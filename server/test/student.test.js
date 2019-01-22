const { expect } = require('chai');
const studentsData = require('../../student.json');

console.log(studentsData)
  
describe('student.json', function () {
    it('should put correct class on students.json', function() {
        let rawMessage = '기수를 숫자만! 입력해주세요! 예)10'
        expect(studentsData.theClass === rawMessage || studentsData.theClass === "").to.be.false
    })

    it('should put correct students on students.json', function() {
        let rawMessage = '스프린트를 진행하는 수강생분의 이름을 한글로! 적어주세요! 예)존도우'
        expect(studentsData.students === rawMessage || studentsData.students === "").to.be.false
    })
});