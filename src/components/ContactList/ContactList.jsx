import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts('/contacts'));
  }, [dispatch]);

  return (
    <div>
      {visibleContacts.length === 0 && <p>No contacts for your search</p>}
      {visibleContacts.map(item => {
        return <Contact key={item.id} contact={item} id={item.id} />;
      })}
    </div>
  );
}
