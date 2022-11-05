import React, {FC} from 'react';
import './Hello.pcss';
import {proxy, useSnapshot} from 'valtio';


const store = proxy({
    user: {
      friends: [{
        name: 'aaa'
      }, {
        name: 'bbb'
      }]
    },
    hello: () => console.log(`Hello, ${store.user}`)
  }
);

export const Hello: FC = () => {
  const snap = useSnapshot(store);

  function modify() {
    store.user.friends[0].name += '!'
  }

  return <div className={'Hello'}>
    <button onClick={() => modify()}>Modify</button>
    <div>{JSON.stringify(snap)}</div>
  </div>;

}
