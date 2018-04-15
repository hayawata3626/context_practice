import React from "react";
import { Consumer } from './Parents';

const GrandChildren = (props) => (
  <Consumer>
    {({ state, actions }) => (
      <div className="grandChildren">
        <div>GrandChildren</div>
        <span>{state.count}</span>
        <div className="buttonArea">
          <button onClick={actions.increment}>＋</button>
          <button onClick={actions.decrement}>ー</button>
        </div>
      </div>
    )}
  </Consumer>
)

export default GrandChildren;