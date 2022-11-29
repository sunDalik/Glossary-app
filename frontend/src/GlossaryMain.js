import { useState } from 'react';
import './GlossaryMain.css'

function GlossaryMain() {
  const [dictionary, setDictionary] = useState([{ key: 'lol', value: 'test' }, { key: 'persona', value: 'ravage them' },]);

  return (
    <div className='GM_page'>
      <div className='GM_header'>Glossary</div>

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
