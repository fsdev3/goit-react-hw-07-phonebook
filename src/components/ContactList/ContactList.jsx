import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilter, getContacts } from 'redux/selectors';
import { useMemo } from 'react';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase(), 0);
    });
  }, [filterValue, contacts]);

  return visibleContacts.map(item => {
    return <Contact key={item.id} contact={item} id={item.id} />;
  });
}
