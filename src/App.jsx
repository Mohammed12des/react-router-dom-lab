import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import MailboxDetails from "./component/MailboxDetails";
import MailboxForm from "./component/MailboxForm";
import MailboxList from "./component/MailboxList";
const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const [formData, setFormData] = useState({ boxholder: "", boxSize: "small" });
  function addBox(formData) {
    setMailboxes([...mailboxes, { ...formData, _id: mailboxes.length + 1 }]);
    setFormData({ boxholder: "", boxSize: "small" });
  }

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <NavBar />
      <h1>Mailbox List</h1>;
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={
            <MailboxForm
              formData={formData}
              handleFormData={handleFormData}
              addBox={addBox}
              setMailboxes={setMailboxes}
            />
          }
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;
