// Завдання 1
/**
 * Функція `checkData` перевіряє наявність даних.
 * У випадку помилки, викликається помилка з причиною (cause).
 *
 *  data - вхідні дані.
 */
function checkData(data) {
  // Якщо об'єкт не пустий повертаємо дані
  try {
    if (Object.entries(data).length !== 0) {
      return data;
    } else {
      // Інакше створюємо помилку,в якості тексту помилки ми використовуємо рядок "Об'єкт пустий".
      throw new Error("Об'єкт пустий");
    }
  } catch (err) {
    // Якщо виникла помилка, повертаємо її повідомлення.
    return err.message;
  }
}

console.log("Завдання: 1 ==============================");

console.log(checkData({}));
// Виведе Об'єкт пустий
console.log(checkData({ name: "John", age: 30, city: "New York" }));
// Виведе { name: 'John', age: 30, city: 'New York' }

// Завдання 2
/**
 * Функція `parseJson` намагається аналізувати вхідний JSON-рядок.
 * Якщо рядок має невірний формат, генерується помилка з відповідним текстом.
 *
 *  jsonStr - JSON-рядок для аналізу.
 */
function parseJson(jsonStr) {
  // Спроба розпарсити JSON-рядок.
  try {
    return JSON.parse(jsonStr.toString());
  } catch (err) {
    // Якщо рядок має невірний формат, виникне помилка, яку ми обробляємо у блоку catch.

    return err.message;
  }
  // Повертаємо отриманий об'єкт

  // Якщо виникла помилка, повертаємо її повідомлення.
}
console.log("Завдання: 2 ==============================");

// Вхідний JSON-рядок з правильним форматом.
let validJson = '{"name":"John","age":30,"city":"New York"}';
// Вхідний JSON-рядок з неправильним форматом.
let invalidJson = '{"name":"John,"age":30,"city":"New York"}'; // Пропущена закриваюча лапка після "John".

// Спробуємо аналізувати JSON-рядки.
console.log(parseJson(validJson));
// Виведе { name: 'John', age: 30, city: 'New York' }
console.log(parseJson(invalidJson));
// Виведе Unexpected token a in JSON at position 15

// Завдання 3

/**
 * Функція `getAge` отримує вік користувача.
 * Якщо вік користувача менше 0, генерується помилка з відповідним текстом.
 *
 *  age - вік користувача.
 */
function getAge(age) {
  // Спроба отримати вік користувача.
  try {
    // Якщо вік менше 0, виникне помилка, яку ми обробляємо у блоку catch.
    if (age < 0) {
      // Генеруємо помилку, якщо вік менше 0 з повідомленням Вік не може бути менше 0!.
      const error = new Error("Вік не може бути менше 0!");
      // До помилки дадаємо властивість name зі значенням "AgeError"
      error.name = "AgeError";
      // Викидаємо помилку
      throw error;
    } else {
      // Якщо помилки не має повертаємо рядок `Вік користувача: ${age}`
      return `Вік користувача: ${age}`;
    }
  } catch (err) {
    // Якщо виникла помилка, повертаємо об'єкт з name та message помилки.
    return { name: err.name, message: err.message };
  }
}
console.log("Завдання: 3 ==============================");

// Виклик функції з від'ємним віком.
console.log(getAge(-1));
// Виведе { error: 'Вік не може бути менше 0!', name: 'AgeError' }
// Виклик функції з віком 20.
console.log(getAge(20));
// Виведе Вік користувача: 20

// Завдання 4
/**
 * Функція `getBookById` отримує книгу за її ID.
 * Якщо книги з таким ID не існує, генерується TypeError.
 *
 *  books - масив книг.
 *  id - ID книги.
 */
function getBookById(books, id) {
  // Спроба знайти книгу по ID та записати в змінну book.
  let book = books.find((book) => book.id === id);

  // Якщо книга не знайдена, генерується TypeError з повідомленням Книга з ID ${id} не знайдена!.
  if (!book) {
    let error = new TypeError(`Книга з ID ${id} не знайдена!`);
    return error.message;
  }
  // Повертаємо book
  return `Книга: ${book.title}`;
}
console.log("Завдання: 4 ==============================");

// Виклик функції з неіснуючим ID.

console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    3
  )
);
// Виведе TypeError: Книга з ID 3 не знайдена!
console.log(
  getBookById(
    [
      { id: 1, title: "Книга 1" },
      { id: 2, title: "Книга 2" },
    ],
    2
  )
);
// Виведе Книга: Книга 2

// Завдання 5

/**
 * Функція `decodeURIComponentWrapper` виконує декодування рядка `encodedString`
 * з використанням функції `decodeURIComponent`. Якщо сталася помилка URIError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  encodedString - Рядок для декодування.
 */
function decodeURIComponentWrapper(encodedString) {
  // Спроба декодувати рядок
  try {
    // Повертаємо декодований рядок
    return decodeURIComponent(encodedString);
  } catch (err) {
    // Якщо виникла помилка, і ії назва дорівнює URIError повертаємо помилку про неправильний URI формат з повідомленням Помилка декодування URI,
    return new URIError("Помилка декодування URI");
  }

  //  інкше повертаємо текстове представлення помилки
}

console.log("Завдання: 5 ==============================");

console.log(decodeURIComponentWrapper("Hello%20World")); // виведе 'Hello World'
console.log(decodeURIComponentWrapper("%E0%A4%A")); // виведе інформацію про помилку URIError

// Завдання 6
/**
 * Функція `findEvenNumber` знаходить перше число, що ділиться на 2 без остачі в масиві.
 * Якщо такого числа немає, вона кидає помилку.
 *
 *  numbers - Масив чисел для пошуку.
 */
function findEvenNumber(numbers) {
  // Створюємо змінну evenNumber без значення
  let evenNumber;

  // Шукаємо перше число, що ділиться на 2 без остачі, та записуємо в нашу змінну.
  evenNumber = numbers.find((number) => number % 2 === 0);

  if (!evenNumber) {
    // Якщо такого числа немає, кидаємо помилку з повідомлення У масиві немає чисел, що діляться на 2 без остачі!.
    let error = new Error("У масиві немає чисел, що діляться на 2 без остачі!");
    return error.message;
  }

  // Якщо число знайдено повертаємо його
  return evenNumber;
}

console.log("Завдання: 6 ==============================");
// Виклик функції з масивом чисел.
console.log(findEvenNumber([1, 3, 5]));
// Виведе
// [ 1, 3, 5 ]
// Error: У масиві немає чисел, що діляться на 2 без остачі!;
console.log(findEvenNumber([1, 4, 5]));
// Виведе
// [ 1, 4, 5 ]
// 4

// Завдання 7
/**
 * Функція `validateUser` перевіряє об'єкт користувача на відповідність заданим вимогам.
 * Якщо об'єкт користувача не відповідає вимогам, вона кидає помилку з причиною (cause).
 *
 *  user - Об'єкт користувача для перевірки.
 */
function validateUser(user) {
  // Перевіряємо, чи існує об'єкт користувача,якщо ні викидуємо помилку з повідомленням "Об'єкт користувача не вказано!".
  if (!user) {
    throw new Error("Об'єкт користувача не вказано!");
  } else if (!user.name) {
    // Перевіряємо, чи існує ім'я користувача,якщо ні викидуємо помилку з повідомленням "Ім'я користувача не вказано!", а як причину вказуємо об'єкт user.
    throw new Error("Ім'я користувача не вказано!", { cause: user });
  } else if (!user.email) {
    // Перевіряємо, чи існує email користувача,якщо ні викидуємо помилку з повідомленням "Email користувача не вказано!", а як причину вказуємо об'єкт user.
    throw new Error("Email користувача не вказано!", { cause: user });
  }
  // Якщо всі перевірки пройдено успішно виводимо повідомлення "Об'єкт користувача відповідає всім вимогам."
  return "Об'єкт користувача відповідає всім вимогам.";

  // Виводимо повідомлення про помилку та причину помилки.
}

console.log("Завдання: 7 ==============================");

// Виклик функції з неповним об'єктом користувача.
try {
  validateUser({ name: "John Doe" });
} catch (err) {
  console.log(err.message, err.cause);
}
// Виведе
// Email користувача не вказано! { name: 'John Doe' }

// Завдання 8
/**
 * Функція `calculateSquareRoot` обчислює квадратний корінь з числа.
 * Якщо аргумент не є числом, вона кидає TypeError.
 * Якщо число від'ємне, вона кидає RangeError.
 *
 *  number - Число для обчислення квадратного кореня.
 */
function calculateSquareRoot(number) {
  try {
    // Перевіряємо, чи аргумент є числом, якщо ні викидуємо помилку про невірний тип даних з повідомленням Аргумент має бути числом!".
    if (typeof number !== "number") {
      throw new TypeError("Аргумент має бути числом!");
    }
    // Перевіряємо, чи число не від'ємне, якщо ні викидуємо помилку про тип недопустимий діапазон з повідомленням Число не повинно бути від'ємним!".
    if (number < 0) {
      throw new RangeError("Число не повинно бути від'ємним!");
    }
    // Повертаємо корінь квадратний з вхідного значення
    return Math.sqrt(number);
  } catch (err) {
    // Повертаємо повідомлення про помилку.
    return err.message;
  }
}

console.log("Завдання: 8 ==============================");

console.log(calculateSquareRoot(9));
// Виведе 3
console.log(calculateSquareRoot(-9));
// Виведе Число не повинно бути від'ємним!
console.log(calculateSquareRoot("abc"));
// Виведе Аргумент має бути числом!

// Завдання 9

/**
 * Функція `processData` обробляє масив чисел.
 * Якщо в масиві є не число, вона кидає TypeError.
 *
 *  data - Масив чисел для обробки.
 */
function processData(data) {
  // Для кожного елемента в масиві
  try {
    for (let index of data) {
      // Перевіряємо, чи елемент є числом
      if (typeof data[index] !== "number") {
        // Якщо елемент не є числом, кидаємо помилку невірного типу даних з повідомленням `Елемент з індексом ${index} має бути числом!`
        throw new TypeError(`Елемент з індексом ${index} має бути числом!`);
      }
      // Повертаємо рядок "Дані успішно оброблені"
      return "Дані успішно оброблені";
    }
  } catch (err) {
    // Виводимо stack trace помилки
    console.log(err.stack);
    // Повертаємо повідомлення помилки
    return err.message;
  }
}

console.log("Завдання: 9 ==============================");

// Викликаємо функцію з правильними даними
console.log(processData([1, 2, 3]));
// Виведе Дані успішно оброблені

// Викликаємо функцію з неправильними даними
console.log(processData([1, "two", 3]));
// Виведе Елемент з індексом 1 має бути числом!

// Завдання 10
/**
 * Функція `evaluateExpression` обчислює результат математичного виразу, переданого у вигляді рядка.
 * Використовується функція `eval` для обчислення виразу. Якщо виникає помилка EvalError,
 * вона перехоплюється та виводиться повідомлення про помилку.
 *
 *  expression - Математичний вираз у вигляді рядка.
 */
function evaluateExpression(expression) {
  // Повертаємо результат розрахунку
  try {
    return eval(expression);
  } catch (err) {
    // Якщо була виявлена помилка повертаємо помилку при виконанні функції eval
    return err;
  }
}

console.log("Завдання: 10 ==============================");

console.log(evaluateExpression("2 + 2")); // виведе 4
console.log(evaluateExpression("10 / hello")); // виведе EvalError: hello is not defined та інформацію про помилку
