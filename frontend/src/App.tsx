import DataTable from "components/DataTable";
import NavBar from "components/navbar";
import Footer from "components/navbar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
