import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, dltContact }) => {
   return (
      <li className={css.item} id={id}>
         {name}: {number}
         <button
            className={css.btn}
            type="button"
            onClick={() => dltContact(id)}
         >
            Delete
         </button>
      </li>
   );
};

ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   dltContact: PropTypes.func.isRequired,
};

export default ContactItem;
