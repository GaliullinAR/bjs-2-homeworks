// Задача 1.

function parseCount(num) {
  let parseNum = Number.parseInt(num);
  if (isNaN(parseNum) === true) {
    throw new Error('Невалидное значение');
  } else {
    return parseNum;
  }
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (err) {
    return err;
  }
}

// Задача 2.

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let halfPerimeter = this.getPerimeter() / 2;
    let s = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
    return Number(s.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(err) {
    return {
      getArea: () => "Ошибка! Треугольник не существует",
      getPerimeter: () => "Ошибка! Треугольник не существует"
    };
  }
}
