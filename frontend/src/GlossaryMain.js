import { useEffect, useState } from 'react';
import './GlossaryMain.css'

function GlossaryMain() {
  const [dictionary, setDictionary] = useState([{ key: 'lol', value: 'test' }, { key: 'persona', value: 'ravage them' },]);
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');


  useEffect(() => {
    //TODO fetch
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setDictionary([{ key: newKey, value: newValue }, ...dictionary]);
    //TODO post
  };

  return (
    <div className='GM_page'>
      <div className='GM_header'>Glossary</div>
      <form onSubmit={onSubmit}>
        <input required value={newKey} onChange={e => setNewKey(e.target.value)} placeholder="Key" />
        <input required value={newValue} onChange={e => setNewValue(e.target.value)} placeholder="Value" />
        <button type="Submit">Add entry</button>
      </form>
      <ul>
        {dictionary.map((entry) => {
          return (<div key={entry.key} className='GM_dictContainer'>
            <div className='GM_dictKey'>{entry.key}</div>
            <div className='GM_dictValue'>{entry.value}</div>
          </div>)
        })}
      </ul>
    </div>
  );
}

export default GlossaryMain;
