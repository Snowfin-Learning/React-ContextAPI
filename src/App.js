import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agents Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <h2>Mission Status: {context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>
            Choose Mission ACCEPTED
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
