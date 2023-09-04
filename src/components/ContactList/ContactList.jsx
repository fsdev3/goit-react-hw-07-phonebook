import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Item } from 'components/Contact/Contact.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts('/contacts'));
  }, [dispatch]);

  return (
    <ul>
      {visibleContacts.length === 0 && <Item>No contacts for your search</Item>}
      {visibleContacts.length > 0 &&
        visibleContacts.map(item => {
          return <Contact key={item.id} contact={item} id={item.id} />;
        })}
    </ul>
  );
}
