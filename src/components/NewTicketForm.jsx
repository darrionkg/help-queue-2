import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <style jsx>{`
        input {
          display: inline-block;
          vertical-align: baseline;
          margin-bottom: 5px;
        }
      `}</style>
      <hr/>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <br/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <br/>
        <textarea
          rows="5"
          cols="80"
          id='issue'
          placeholder='Describe your issue.'/>
        <br/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
