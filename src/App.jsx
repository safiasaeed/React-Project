import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";
import Navbar from "./components/layout/Navbar";

import "./App.css";

function App() {

  function handleSave() {
    alert("Saved!");
  }

  function handleCancel() {
    alert("Cancelled!");
  }

  function handleDelete() {
    alert("Deleted!");
  }

  const students = [
    {
      name: "Eman",
      age: 22,
      city: "Cairo"
    },
    {
      name: "Sara",
      age: 21,
      city: "Giza"
    },
    {
      name: "Ahmed",
      age: 23,
      city: "Qena"
    },
    {
      name: "Mona",
      age: 20,
      city: "Luxor"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="app">

        <h1>Reusable Components Demo</h1>


        {/* Buttons */}

        <section>
          <h2>Buttons</h2>

          <Button
            text="Save"
            onClick={handleSave}
            variant="primary"
          />

          <Button
            text="Cancel"
            onClick={handleCancel}
            variant="secondary"
          />

          <Button
            text="Delete"
            onClick={handleDelete}
            variant="danger"
          />
        </section>


        {/* Cards */}

        <section>
          <h2>Cards</h2>

          <div className="cards-container">

            <Card
              title="React"
              description="A JavaScript library for building user interfaces."
              image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />

            <Card
              title="TypeScript"
              description="A typed superset of JavaScript."
              image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
            >
              <Button
                text="Learn More"
                onClick={() => alert("TypeScript selected")}
                variant="primary"
              />
            </Card>

          </div>
        </section>


        {/* Table */}

        <section>
          <h2>Students</h2>

          <Table
            columns={["Name", "Age", "City"]}
            data={students}
            striped={true}
          />

        </section>

      </div>
    </>
  );
}

export default App;