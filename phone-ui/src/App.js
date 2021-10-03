import './App.css';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {useState} from 'react';




function App() {
  const [phone, setPhone] = useState({})
  var sock = new SockJS('http://localhost:8080/ws');
  let stompClient = Stomp.over(sock);


  sock.onopen = function() {
    console.log('open');
  }
  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/chat', function (phone_info) {
      console.log(phone_info);
      //you can execute any function here
     var st = phone_info.body.toString();
      var phone = eval('('+st+')');
      setPhone(phone);

    });
  });

  return (
    <div className="App">
      <p>
        телефон : {phone.phoneNumber}
      </p>
      <p>
        фио     : {phone.fio}
      </p>
      <p>
        снилс   : {phone.snils}
      </p>
      <p>
        адрес   : {phone.address}
      </p>

    </div>
  );
}

export default App;
