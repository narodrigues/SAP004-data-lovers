import utils from '../src/data.js';
import myObject from '../src/data/pokemon/pokemon.js';

describe('utils', () => {
  it('should be an object', () => {
    expect(typeof utils).toBe('object');
  });

  describe('utils.sortData', () => {

    it('should be a function', () => {
    expect(typeof utils.sortData).toBe('function');
    });

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

  describe('utils.computeStats', () => {

    it('should be a function', () => {
    expect(typeof utils.computeStats).toBe('function');
    });

    it('should return "3" with "Dragon" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Dragon"]).toBe(3);
    });

    it('should return "14" with "Grass" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Grass"]).toBe(14);
    });

    it('should return "24" with "Normal" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Normal"]).toBe(24);
    });

    it('should return "32" with "Water" type', () => {
      expect(utils.computeStats(myObject.pokemon)["Water"]).toBe(32);
    });
  });
});