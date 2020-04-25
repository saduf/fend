const fetch = require("node-fetch");
import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("formText value: : " + formText);
    let validateInputString = checkForName(formText)
    //let validateInputString = true
    console.log("::: Form Submitted :::")
    const polarityEl = document.getElementById('polarity');
    const subjectivityEl = document.getElementById('subjectivity');
    const textEl = document.getElementById('text');
    const p_confidenceEl = document.getElementById('polarity_confidence');
    const s_confidenceEl = document.getElementById('subjectivity_confidence');

    console.log("This is the return value: " + validateInputString)
  if(validateInputString == true) {     
      return postData('http://localhost:8081/sentiment', {inputPhrase: formText})
      //.then(res => res.json())
      .then(function(res) {
          console.log('Polarity', res.polarity);
          console.log('Subjectivity', res.subjectivity);
          console.log('Text', res.text);
          console.log('Polarity_Confidence', res.polarity_confidence);
          console.log('Subjectivity_Confidence', res.subjectivity_confidence);

          polarityEl.style.color = null;
          polarityEl.innerHTML = "Polarity: " + `<span style="color:green">${res.polarity}</span>`
          subjectivityEl.innerHTML = "Subjectivity: " + `<span style="color:green">${res.subjectivity}</span>`
          textEl.innerHTML = "Text: " + `<span style="color:green">${res.text}</span>`
          p_confidenceEl.innerHTML = "Polarity_Confidence: " + `<span style="color:green">${res.polarity_confidence}</span>`
          s_confidenceEl.innerHTML = "Subjectivity_Confidence: " + `<span style="color:green">${res.subjectivity_confidence}</span>`

          return res.polarity
      })
    } else {
      polarityEl.innerHTML = "Please enter a valid alphanumeric text, it cannot be empty or compesed only by numbers"
      polarityEl.style.color = 'red'
      subjectivityEl.innerHTML = ""
      textEl.innerHTML = ""
      p_confidenceEl.innerHTML = ""
      s_confidenceEl.innerHTML = ""
    }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }

export { handleSubmit }
