import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {setFilter } from '../Redux/filterSlice';
import css from "../Modules/phoneBook.module.css";
import { selectStatusFilter } from '../Redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
     <label className={`${css.basicFont} ${css.labelContacts}`}>Filter contacts by name:
     <input className={`${css.basicFont} ${css.input}`} type="text" value={filter}onChange={onChange}/>
     </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};

export default Filter;
