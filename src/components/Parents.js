import React, { createContext } from "react";
import Child from './Child';

export const Context = createContext()
export const { Provider, Consumer } = Context

export class Parents extends React.Component {
	constructor(){
  	super();
    this.state = {
			count: 10
    }
  }
	render(){
  	return(
    <Provider
      value={{
        state: this.state,
        actions: {
          increment:() => this.setState({ count: this.state.count + 1 }),
          decrement:() => this.setState({ count: this.state.count -1 })
        }
      }}
    >
      <div className="parents">
        <div>Parents</div>
        {this.state.count}
        <Child/>
      </div>
    </Provider>
    )
  }
}