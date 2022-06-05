function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    let hash = args.join(',');
    const idx = cache.findIndex(item => item.hash === hash);
    if (idx !== -1) {
      console.log(`Из кэша: ${cache[idx].value}`);
      return `Из кэша: ${cache[idx].value}`;
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
  let savedArgs;
  let savedThis;

  return function (...args) {
    savedArgs = args;
    savedThis = this;
    if (isThrottled) {
      return;
    }
    func.apply(savedThis, savedArgs);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, ms);
    
  }
}

let add = () => console.log('Сигнал отправлен');

function debounceDecorator2(func) {
  // Ваш код
  function wrapper(...args) {
    wrapper.history.push(args);
    wrapper.count = wrapper.history.length;
    return func.apply(this, args);
  }
  wrapper.history = [];
  return wrapper;
}

let res = debounceDecorator2(add);


