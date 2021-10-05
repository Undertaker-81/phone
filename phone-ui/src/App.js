import './App.css';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {useState} from 'react';
import {Button} from '@material-ui/core';
import SendIcon from "mdi-react/SendIcon";
import Phone from "./model/phone";


function App() {
  const [phone, setPhone] = useState("");
  const [fio, setFio] = useState("");
  const [snils, setSnils] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState(0);
  var sock = new SockJS('https://phone-app-react.herokuapp.com/ws');
  let stompClient = Stomp.over(sock);


  sock.onopen = function() {
    console.log('open');
  }
  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/chat', function (phone_info) {
      console.log(phone_info);
     var st = phone_info.body.toString();
      var phone = eval('('+st+')');
      setPhone(phone.phoneNumber);
      setFio(phone.fio);
      setSnils(phone.snils);
      setAddress(phone.address);
      setId(phone.id);
    });
  });

  return (
    <div className="App">
      <p>
        телефон : <input value={phone} />
      </p>
      <p>
        фио     : <input value={fio} onChange={event => setFio(event.target.value)}/>
      </p>
      <p>
        снилс   : <input value={snils} onChange={event => setSnils(event.target.value)}/>
      </p>
      <p>
        адрес   : <input value={address} onChange={event => setAddress(event.target.value)}/>
      </p>

    <Button
        variant="contained" color="primary"
        startIcon={<SendIcon/>}
        onClick={() => {stompClient.send("/app/send/message", {},   JSON.stringify(new Phone(id, fio, snils, address, phone)))}}>
        Сохранить
    </Button>
    </div>
  );
}

export default App;
