import $ from 'jquery';

// url should be directed at a :user style endpoint
const get = (endpoint, cb) => {
  $.ajax({
    type: 'GET',
    url: endpoint,
    context: this,
    dataType: 'json',
  })
   .done(data => cb(data))
   .fail(err => console.log(err));
};

const post = (endpoint, data, cb) => {
  $.ajax({
    type: 'POST',
    url: endpoint,
    context: this,
    contentType: 'application/json',
    data: data
  })
   .done(data => cb(data))
   .fail(err => console.log(err));
};

// url should be directed at a :user style endpoint
const patch = (endpoint, data, cb) => {
  $.ajax({
    type: 'PATCH',
    url: endpoint,
    context: this,
    contentType: 'application/json',
    data: data
  })
   .done(data => cb(data))
   .fail(err => console.log(err));
};

export default {get: get,
                post: post,
                patch: patch};
