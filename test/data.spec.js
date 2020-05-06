import utils from '../src/data.js';
import myObject from '../src/data/pokemon/pokemon.js';

describe('utils', () => {
  it('should be an object', () => {
    expect(typeof utils).toBe('object');
  });

  /*describe('utils.computeStats');
  describe('utils.filterData');*/

  describe('utils.sortData', () => {

    it('should be a function', () => {
    expect(typeof utils.sortData).toBe('function');
    });

    /*it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => utils.sortData()).toThrow(TypeError);
      expect(() => utils.sortData(0)).toThrow(TypeError);
      expect(() => utils.sortData(0, 0, 0)).toThrow(TypeError);
      expect(() => utils.sortData({}, [], null)).toThrow(TypeError);
    });*/

    it('should return "Abra" to "Zubat" with sort order "a-z"', () => {
      expect(utils.sortData(myObject.pokemon, 'name', 'a-z')[0].name).toBe('Abra');
    });

    it('should return "Bulbasaur" to "Mew" with sort order "1-151"', () => {
      expect(utils.sortData(myObject.pokemon, 'num', '1-151')[0].name).toBe('Bulbasaur');
    });

    it('should return "Zubat" to "Abra" with sort order "z-a"', () => {
      expect(utils.sortData(myObject.pokemon, 'name', 'z-a')[0].name).toBe('Zubat');
    });

    it('should return "Mew" to "Bulbasaur" with sort order "151-1"', () => {
      expect(utils.sortData(myObject.pokemon, 'num', '151-1')[0].name).toBe('Mew');
    });
  });
});