import _ from 'lodash';

let users = [
  { id: 1, name: "Alice", age: 25, active: true },
  { id: 2, name: "Bob", age: 30, active: false },
  { id: 3, name: "Charlie", age: 35, active: true },
  { id: 4, name: "David", age: 40, active: false },
];

// 1. Повернути всіх активних користувачів
export function getActiveUsers(users) {
  return _.filter(users, { active: true });
}

// 2. Повернути користувача за його id
export function getUserById(users, id) {
  return _.find(users, { id });
}

// 3. Відсортувати користувачів за віком (в порядку зростання)
export function sortUsersByAge(users) {
  return _.sortBy(users, 'age');
}

// 4. Отримати список імен користувачів
export function getUserNames(users) {
  return _.map(users, 'name');
}
