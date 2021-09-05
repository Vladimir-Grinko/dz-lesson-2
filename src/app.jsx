import Counters from "./components/counters";
import React, { useState } from "react";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Кружка" },
    { value: 0, id: 5, name: "Нож" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const newCounters = counters.filter((c) => {
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = counters.filter((c) => {
      if (c.id === counterId && c.value > 0) {
        c.value--;
        return c;
      }
      return c;
    });
    setCounters(newCounters);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onReset={handleReset}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
