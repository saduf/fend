import { handleSubmit } from '../src/client/js/formHandler'
import { checkForName } from '../src/client/js/nameChecker'

//jest.mock('nameChecker');

test('The sentiment is expected to be positive', () => {

    document.body.innerHTML = '<button id="submit-btn"><input value="John is a very good football player!" id="name" type="name"></button><div id="results"></div>';
    document.body.innerHTML += '<section><strong>Form Results:</strong><div id="polarity"></div><div id="subjectivity"></div><div id="text"></div><div id="polarity_confidence"></div><div id="subjectivity_confidence"></div></section>'
    var ev = document.createEvent('Events');
    ev.initEvent('click', true, false);
    //el.dispatchEvent(evObj);
    
    //const ev = document.getElementById('submit-btn').click();
    console.log("Event" + ev);
    //const ev = document.querySelector('submit').click();
    return handleSubmit(ev).then(data => {
      expect(data).toBe('positive');
    });
  });
