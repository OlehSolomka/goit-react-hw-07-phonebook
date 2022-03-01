import './contactList.scss';

const Contactlist = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, phone }) => {
        return (
          <li key={id}>
            {name} {phone}
            <button
              type="button"
              onClick={() => {
                onDelete(id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contactlist;
