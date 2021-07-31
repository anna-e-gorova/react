import React, { useState, useRef } from 'react';
import { AUTHORS } from '../../constants';
import { Input, Button } from "@material-ui/core";
import { FormControl, InputLabel, FormHelperText } from "@material-ui/core";

export const Form = ({ onSendMessage }) => {

  const [value, setValue] = useState('');
  
  const inputRef = useRef();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    onSendMessage({
      author: AUTHORS.human,
      id: Date.now(),
      text: value,
    });
    setValue('');
    inputRef.current?.focus();
  }

  return (
  <>
    <FormControl>
     <form onSubmit={handleSubmit}>
      <InputLabel ref={inputRef} htmlFor="my-input">Message</InputLabel>
      <Input autoFocus={true} id="my-input" aria-describedby="my-helper-text" type="text" value={value} onChange={handleChange}/>
      <Button type="submit" variant="contained" color="primary">send</Button>
      <FormHelperText id="my-helper-text">We'll contact you.</FormHelperText>
     </form>
    </FormControl>
  </>
  )
}