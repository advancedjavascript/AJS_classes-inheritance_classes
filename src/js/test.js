import Bowman from './classes/bowman';
import Swordsman from './classes/swordsman';
import Magician from './classes/magician';
import Undead from './classes/undead';
import Zombie from './classes/zombie';
import Daemon from './classes/daemon';

test('type is Bowman', () => {
  const expected = {
    attack: 25,
    defence: 25,
    name: 'Lucky',
    type: 'Bowman',
  };

  const received = new Bowman('Lucky');
  expect(received).toEqual(expected);
});

test('type is Magician', () => {
  const expected = {
    attack: 10,
    defence: 40,
    name: 'Lucky',
    type: 'Magician',
  };

  const received = new Magician('Lucky');
  expect(received).toEqual(expected);
});

test('type is Swordsman', () => {
  const expected = {
    attack: 40,
    defence: 10,
    name: 'Lucky',
    type: 'Swordsman',
  };

  const received = new Swordsman('Lucky');
  expect(received).toEqual(expected);
});

test('type is Undead', () => {
  const expected = {
    attack: 25,
    defence: 25,
    name: 'Lucky',
    type: 'Undead',
  };

  const received = new Undead('Lucky');
  expect(received).toEqual(expected);
});

test('type is Zombie', () => {
  const expected = {
    attack: 40,
    defence: 10,
    name: 'Lucky',
    type: 'Zombie',
  };

  const received = new Zombie('Lucky');
  expect(received).toEqual(expected);
});

test('type is Daemon', () => {
  const expected = {
    attack: 10,
    defence: 40,
    name: 'Lucky',
    type: 'Daemon',
  };

  const received = new Daemon('Lucky');
  expect(received).toEqual(expected);
});
