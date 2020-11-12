const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(function (number) {
  return number > 15;
});

// console.log(filteredNumbers);

// // numbers.forEach(function (element, index, array) {
// //   console.log(element);
// //   console.log(index);
// //   console.log(array);
// // });

// /**
//  * map
//  */
// const mappedNumbers = numbers.map(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);

//   return element * 2;
// });

// console.log(mappedNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
// console.table(players);
/*
 * Получаем массив имён всех игроков
 */
// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */
// const updatedPlayers = players.map(function (player) {
//   console.log(player);
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(updatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToUpdate = "player-3";

// const updatedPlayers = players.map(function (player) {
//   console.log(player.id);

//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }
// });

// console.table(updatedPlayers);

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter((player) => !player.online);
// console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
// console.table(hardcorePlayers);

/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */
/*
 * Ищем игрока по id
 */
const playerIdToFind = "player-3";
const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */
const isAllOnline = players.every((player) => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
const isAnyOnline = players.some((player) => player.online);
console.log("isAnyOnline: ", isAnyOnline);

const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
console.log("anyHardcorePlayers: ", anyHardcorePlayers);
