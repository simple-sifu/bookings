import data from '../../static.json';
export default function UserPicker() {
    
    const { users } = data;


    return (
      <select>
        {
            users.map(user => (
                <option key={user.id}>{user.name}</option>
            ))
        }
      </select>
    )
}