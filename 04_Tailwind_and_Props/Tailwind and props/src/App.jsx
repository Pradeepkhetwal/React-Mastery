import "./App.css";
import Card from "./component/card.jsx";
function App() {
  return (
    <>
      {/* with this tailwind classes background will become green with 200 showing the color intensity , we have make the text hello tailwind color black and given it padding 4 and borders ko rounded kar diya hai xl size k according. */}
      <h1 className="bg-green-200 text-black p-4 rounded-xl">hello tailwind</h1>
      {/* passing props to these so that they are recevied and used in Card.jsx */}
      <Card heading="hello ji" paragraph="aur kya hi bolu " />
      <Card heading="ha bhai aa gya samajh" />
    </>
  );
}

export default App;
