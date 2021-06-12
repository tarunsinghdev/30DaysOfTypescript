import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guestList, setGuestList] = useState<string[]>([]); // observe

  const onClick = () => {
    setName('');
    setGuestList([...guestList, name]);
  };

  return (
    <div>
      <h2>Guest List</h2>
      {guestList.length && guestList.map((guest) => <p key={guest}>{guest}</p>)}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
