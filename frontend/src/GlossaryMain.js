import { useEffect, useState } from 'react';
import './GlossaryMain.css'
import { Button, Col, Row, Form, ListGroup, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function GlossaryMain() {
  const SERVER_URL = 'http://localhost:8000'
  const [dictionary, setDictionary] = useState([{ key: 'lol', value: 'test' }, { key: 'persona', value: 'ravage them' },]);
  const [searchString, setNewSearchString] = useState('');
  const [newKey, setNewKey] = useState('');
  const [newValue, setNewValue] = useState('');

  useEffect(() => {
    fetch(`${SERVER_URL}/read`, {
      method: 'GET',
    }).then(response => response.json())
      .then(json => {
        console.log(json);
        const serverDictionary = Object.entries(json).map(e => {
          return { key: e[0], value: e[1] }
        });
        console.log(serverDictionary);
        setDictionary(serverDictionary);
      })
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`${SERVER_URL}/add?key=${newKey}&value=${newValue}`, {
      method: 'POST',
    }).then(response => {
      if (response.status == 200) {
        setDictionary([{ key: newKey, value: newValue }, ...dictionary]);
      }
    });
  };

  return (
    <div className='GM_page'>
      <div className='h3 text-center'>Glossary</div>
      <form onSubmit={onSubmit} className='ms-4 w-75 mt-4 mb-5'>
        <Row className="align-items-end">
          <Col>
            <Form.Group>
              <Form.Label>Key</Form.Label>
              <Form.Control required placeholder="Key" value={newKey} onChange={e => setNewKey(e.target.value)}></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control required placeholder="Value" value={newValue} onChange={e => setNewValue(e.target.value)} ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">Add entry</Button>
          </Col>
        </Row>
      </form>

      <InputGroup className="w-25 ms-4">
        <InputGroup.Text>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </InputGroup.Text>
        <Form.Control placeholder="Search..." value={searchString} onChange={e => setNewSearchString(e.target.value)}></Form.Control>
      </InputGroup>

      <ListGroup className='w-50 mt-4'>
        {dictionary.filter(entry => entry.key.toLowerCase().includes(searchString.toLowerCase())).map((entry) => {
          return (
            <ListGroup.Item key={entry.key} className='ms-3'>
              <div className='GM_dictKey'>{entry.key}</div>
              <div className='GM_dictValue'>{entry.value}</div>
            </ListGroup.Item>)
        })}
      </ListGroup>

    </div>
  );
}

export default GlossaryMain;
