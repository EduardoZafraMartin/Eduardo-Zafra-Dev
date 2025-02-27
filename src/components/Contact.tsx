import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Validar campos vacíos
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    // Si los campos no están vacíos, enviamos el correo
    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        from_name: name,       // Nombre del remitente
        reply_to: email,       // Correo del remitente
        message: message,      // Contenido del mensaje
      };

      const service_id = 'service_si0s5xb';    
      const template_id = 'template_lcye1ic';  
      const api_key = 'CkWcjVYkcQEXJTJ43';       

      // Enviar correo a través de EmailJS
      emailjs.send(service_id, template_id, templateParams, api_key)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName(''); 
          setEmail('');
          setMessage('');
        }, (error) => {
          console.log('FAILED...', error);
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contacto</h1>
          <p>¿Tienes un proyecto esperando para ser realizado? ¡Colaboremos y hagámoslo realidad!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Nombre"
                placeholder="What's your name?"
                value={name}  // Asegúrate de que el valor se esté tomando del estado 'name'
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Teléfono"
                placeholder="How can I reach you?"
                value={email}  // Asegúrate de que el valor se esté tomando del estado 'email'
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Mensaje"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}  // Asegúrate de que el valor se esté tomando del estado 'message'
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Enviar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
