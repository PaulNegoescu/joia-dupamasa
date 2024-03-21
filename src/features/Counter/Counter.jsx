import { useState } from 'react';
import clsx from 'clsx';

import styles from './Counter.module.css';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(diff) {
    setCount(count + diff);
  }

  // let cls = '';
  // if(count > 0) {
  //   cls = 'positive';
  // } else if(count < 0) {
  //   cls = 'negative';
  // }

  // let cls = clsx({positive: count > 0, negative: count < 0});

  return (
    <div>
      <h1>Counter</h1>
      <output className={clsx({ [styles.positive]: count > 0, [styles.negative]: count < 0 })}>
        {count}
      </output>
      <p>
        <button onClick={() => handleClick(-1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => handleClick(1)}>+</button>
      </p>
    </div>
  );
}
