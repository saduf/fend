const fetch = require("node-fetch");
import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("formText value: : " + formText);
    let validateInputString = checkForName(formText)
    //let validateInputString = true
    console.log("This is the return value: " + validateInputString)
  if(validateInputString == true) {     
      console.log("::: Form Submitted :::")
      return postData('http://localhost:8081/sentiment', {inputPhrase: formText})
      //.then(res => res.json())
      .then(function(res) {
          console.log('Polarity', res.polarity);
          console.log('Subjectivity', res.subjectivity);
          console.log('Text', res.text);
          console.log('Polarity_Confidence', res.polarity_confidence);
          console.log('Subjectivity_Confidence', res.subjectivity_confidence);
          document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity
          document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity
          document.getElementById('text').innerHTML = "Text: " + res.text
          document.getElementById('polarity_confidence').innerHTML = "Polarity_Confidence: " + res.polarity_confidence
          document.getElementById('subjectivity_confidence').innerHTML = "Subjectivity_Confidence: " + res.subjectivity_confidence

          return res.polarity
      })
    } else {
      document.getElementById('polarity').innerHTML = "Please enter a valid alphanumeric text, it cannot be empty or compesed only by numbers"
      document.getElementById('subjectivity').innerHTML = ""
      document.getElementById('text').innerHTML = ""
      document.getElementById('polarity_confidence').innerHTML = ""
      document.getElementById('subjectivity_confidence').innerHTML = ""
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
