import {getCoordinatesFromInput} from './geoHelper.js';

const validateUserName = (input) => {
  let criteria = new RegExp(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/);
  if (input && input.search(criteria) > -1) return input;
  else return null;
  // else throw new Error('invalid username');
};

const validateEmail = (input) => {
  let criteria = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (input && input.search(criteria) > -1) return input;
  else return null;
  // else throw new Error('invalid email address');
};

const validatePhone = (input) => {
  let criteria = new RegExp(/^[0-9]{10}$/);
  if (input && input.search(criteria) > -1) return input;
  else return null;
  // let criteria = new RegExp(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{1}$/);
  // if (input && input.search(criteria) > -1) return input;
  // else return null;
  // else throw new Error('invalid phone number');
};

export const validateInputs = (data) => {
  return new Promise(function(resolve, reject) {
    for (var item in data) {
      if (item === 'name') data[item] = validateUserName(data[item]);
      else if (item === 'email') data[item] = validateEmail(data[item]);
      else if (item === 'phone') data[item] = validatePhone(data[item]);
      console.log(item, data[item]);
      if (data[item] === null) reject('All fields must be filled and data must be valid');
    }
    resolve(data);
  });
}
