import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  if (mailboxes.length === 0 || !mailboxes) {
    return <h2>There are no Mailboxes</h2>;
  } else {
    return (
      <>
        <h1>MailboxList</h1>
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id}>
              <Link to={`/mailboxes/${mailbox._id}`}>
                Mailbox {mailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
};

export default MailboxList;
