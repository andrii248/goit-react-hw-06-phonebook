import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

const ContactList = ({ availableContacts, dltContact }) => {
   return (
      <ul className={css.list}>
         {availableContacts.map(({ id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               dltContact={dltContact}
            />
         ))}
      </ul>
   );
};

ContactList.propTypes = {
   availableContacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      }).isRequired
   ).isRequired,
   dltContact: PropTypes.func.isRequired,
};

export default ContactList;
