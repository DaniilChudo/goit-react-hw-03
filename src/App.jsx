import ContactForm from "./components/ContacForm/ContacForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContacList/ContactList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
