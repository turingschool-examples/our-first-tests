const chai = require('chai');
const expect = chai.expect;
const {
  getKittenName,
  getKittenDetail,
  addDogProperty,
  calculateTotalBudget
} = require('../src/challenges')

describe('challenges', () => {
  describe('kittens', () => {
    const kittens = [
      { name: 'george', age: 3, breed: 'tabby' },
      { name: 'bob', age: 2, breed: 'siamese' },
      { name: 'joe', age: 5, breed: 'orange' }
    ];

    it('should return a kitten name by index', () => {
      expect(getKittenName(kittens, 2)).to.equal('joe');
    });

    it('should return a kitten detail by index', () => {
      expect(getKittenDetail(kittens, 1, 'name')).to.equal('bob');
      expect(getKittenDetail(kittens, 0, 'breed')).to.equal('tabby');
      expect(getKittenDetail(kittens, 2, 'age')).to.equal(5);
    });
  });

  describe('dog', () => {
    it('should add a key value pair', () => {
      const dog = {
        name: 'Boris',
        age: 3,
        breed: 'Pug'
      }

      addDogProperty(dog, 'temperament', 'jolly')

      expect(dog.temperament).to.equal('jolly');
    });
  });

  describe('budgets', () => {
    it('should be able to add up a total budget', () => {
      const budget1 = {
        groceries: 30,
        rent: 1500,
        fun: 15,
        doggo: 50
      }

      expect(calculateTotalBudget(budget1)).to.equal(1595);
    });

    it('should be able to add up a total budget', () => {
      const budget2 = {
        groceries: 'twenty',
        rent: 100,
        fun: 'five',
        doggo: 50
      }

      expect(calculateTotalBudget(budget2)).to.equal(175);
    });
  });
});