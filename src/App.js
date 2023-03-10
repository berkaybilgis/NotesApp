import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App" style={{ position: "relative", textAlign: "center" }}>
      <Header />
      <Search />
      <AddNote />
      <NoteList />
    </div>
  );
}

export default App;
