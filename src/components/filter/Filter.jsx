import {Field} from './Filter.styled'
export const Filter = ({ filter, onChange }) => {
    return <Field type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for search">
        </Field>
}