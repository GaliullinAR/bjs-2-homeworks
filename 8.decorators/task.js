function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    let hash = args.join(',');
    const id = cache.find(item => item.hash === hash);
    if (id !== undefined) {
      console.log(`Из кэша: ${id.value}`);
      return `Из кэша: ${id.value}`;
    }
    let result = func(...args);
    cache.push({ hash, value: result });
    
    if (cache.length > 5) {
      cache.shift();
    }
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  }
  
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let isThrottled = false;
  let time;

  return function wrapper(...args) {
    if (!isThrottled) {
      func.apply(this, args);
    }
    isThrottled = true;
    clearTimeout(time);

    time = setTimeout(() => {
      func.apply(this, args);
      isThrottled = false;
    }, ms);
    
  }
}

let add = () => console.log('Сигнал отправлен');

function debounceDecorator2(func) {
  // Ваш код
  let isThrottled = false;
  let time;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count++;

    if (!isThrottled) {
      func.apply(this, args);
    }
    isThrottled = true;
    clearTimeout(time);

    time = setTimeout(() => {
      func.apply(this, args);
      isThrottled = false;
    }, ms);
  };
  return wrapper;
}


