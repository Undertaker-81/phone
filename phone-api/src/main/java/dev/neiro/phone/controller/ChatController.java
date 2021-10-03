package dev.neiro.phone.controller;

import dev.neiro.phone.dto.PhoneNumberDto;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * @author Panfilov Dmitriy
 * 02.10.2021
 */
@Controller
public class ChatController {

    @MessageMapping("/send/message")
    public void sendMessage(PhoneNumberDto message) {
        System.out.println(message);
    }
}
