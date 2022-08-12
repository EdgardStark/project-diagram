import React, {useState} from 'react';
import NewCost from "./components/NewCost/NewCost";
import Costs from './components/Costs/Costs';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {  
    id: 'c2',
    date: new Date(2021, 11, 2),
    description: "MacBook",
    amount: 1592.94
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 20),
    description: "Штаны",
    amount: 45.89
    },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);
 
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Go to react"),
  //   React.createElement(Costs, { costs: costs})
  // );

  const addCostHandler = (cost) => {
    setCosts((prevCosts ) => {
      console.log(cost);
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
};

export default App;
