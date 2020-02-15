import React from 'react';
import { makeStyles, useEffect } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';






function helpAndSupportApp(props)
{





  return (
    <div class="contact-section">
      <h1 style={{ fontSize: 30, textAlign:"center", padding: 8 }}>We are here to help you</h1>
      <p style={{ fontSize: 18, paddingTop: 10, paddingBottom: 20,textAlign:'center'}}>Please fill out this form and we will get back to you immediately</p>
      
      <input type="text" id="fname" placeholder="Subject"/>


      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}

      <select id="country" name="country">
        <option value="">Inquiry Type</option>
        <option value="question">Question</option>
        <option value="incident">Incident</option>
        <option value="problem">Problem</option>
        <option value="feature-request">Feature Request</option>
        <option value="refund">other</option>
      </select>

    
      <select id="country" name="country">
        <option value="" >Pirority</option>
        <option value="question">Low</option>
        <option value="incident">Medium</option>
        <option value="problem">High</option>
        <option value="problem">Urgent</option>
      </select>

    
      <textarea id="subject" name="subject" placeholder="Description"></textarea>

      <input type="file" id="myFile" name="filename"/>

      <div className="btns">
        <div className="right">
        <input type="submit" value="Cancel"/>
        <input type="submit" value="Send"/>
        </div>
      </div>


    </div>
  );
}


export default helpAndSupportApp;
