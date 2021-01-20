import React from 'react';
import handlePostQuestion from "../../actions/QA/handlePostQuestion.js";

const AddQuestionForm = ({ productName, close, product_id }) => {

  let handleSubmitQForm = () => {
    let question = document.getElementById("questionInput").value;
    let nickName = document.getElementById("qNicknameInput").value;
    let email = document.getElementById("qEmailInput").value;

    console.log(question, nickName, email);

    let dataSubmission = {
      body: question,
      name: nickName,
      email: email,
      product_id: product_id
    }

    handlePostQuestion(dataSubmission);
  }

  return (
    <div id="addQuestionPage">
      <h1>Ask your question</h1>
      <h2>About the {productName}</h2>
      <div id="addQuestionFormContainer">
      <form id="addQuestionForm">
        <label htmlFor="questionInput">Your Question</label>
        <input type="text" id="questionInput" maxLength="1000"></input>
        <br/><br/>
        <label htmlFor="qNicknameInput">What is your nickname?</label>
        <input type="text" id="qNicknameInput" maxLength="60" placeholder="Example: jackson11!"></input>
        <br/>
        <span className="formWarning">For privacy reasons, do not use your full name or email address</span>
        <br/>
        <br/>
        <label htmlFor="qEmailInput">What is your email?</label>
        <input type="text" id="qEmailInput" maxLength="60" placeholder="Example: jack@email.com"></input>
        <br/>
        <span className="formWarning">For authentication reasons, you will not be emailed</span>
        <br/>
        <br/>
      </form>
      </div>
      <button id="submitButton" onClick={handleSubmitQForm}>Submit</button>
      <span id="closeX" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
    </div>
  )
}

export default AddQuestionForm;