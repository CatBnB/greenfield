import {getCoordinatesFromInput} from './geoHelper.js';

export const validateUserName = (input) => {
  let criteria = new RegExp(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/);
  if (input.search(criteria) > -1) return input;
  else return null;
  // else throw new Error('invalid username');
};

export const validateEmail = (input) => {
  let criteria = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (input.search(criteria) > -1) return input;
  else return null;
  // else throw new Error('invalid email address');
};

export const validateAddress = (input) => {
  return getCoordinatesFromInput(input).then(coordinates => {
    if (!coordinates || coordinates.length === 0) return null;
    else return input;
  })
};

export const validatePhone = (input) => {
  let criteria = new RegExp(/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/);
  if (input.search(criteria) > -1) return input;
  else return null;
  // else throw new Error('invalid phone number');
};

export const validateInputs = (data) => {
  return new Promise(function(resolve, reject) {
    for (var item in data) {
      if (!item) reject('all fields must have data');
    }
    resolve(data);
  });
}
