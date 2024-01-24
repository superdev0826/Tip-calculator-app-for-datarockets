import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const TipCalculatorContext = createContext();

const initialInputs = {
  bill: 0,
  people: 0,
  tip: 0,
};

const initialResults = {
  tipAmount: 0,
  total: 0,
};

const calculate = ({ bill, people, tip }) => ({
  tipAmount: (+bill * tip) / (100 * people),
  total: (+bill + (bill * (tip / 100))) / people,
});

const TipCalculatorContextProvider = ({ children }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [results, setResults] = useState(initialResults);
  const { bill, people, tip } = inputs;

  useEffect(() => {
    if (inputs.people !== 0) {
      setResults(calculate({ bill, people, tip }));
    }
  }, [bill, people, tip]);

  const changeInputs = ({ name, value }) => setInputs({ ...inputs, [name]: value });
  const reset = () => {
    setInputs(initialInputs);
    setResults(initialResults);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TipCalculatorContext.Provider value={{
      inputs, changeInputs, results, reset,
    }}
    >
      {children}
    </TipCalculatorContext.Provider>
  );
};

TipCalculatorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TipCalculatorContextProvider;
