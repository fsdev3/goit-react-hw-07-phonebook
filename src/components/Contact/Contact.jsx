import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <button onClick={handleDeleteContact}>Delete</button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
