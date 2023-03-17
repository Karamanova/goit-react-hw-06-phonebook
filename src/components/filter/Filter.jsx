import { Field } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Field
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="Enter name for search"
    />
  );
};
