import React from 'react'

const authorize = async () => {
  // Call the authorize endpoint, which will return an authorize URL, then redirect to that URL
  const resp = await fetch('/authorize')
  const data = await resp.text()
  
  console.log(data)
  window.location = data;
}

// TODO bit worried about passing over the auth token
// https://stackoverflow.com/questions/44324080/how-to-store-access-token-oauth-2-auth-code-flow
export const App = () => {
  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
    window.location.hash = '';
  
  return (
    <>
      <button class="btn btn-primary" id="login" onClick={() => authorize()}>
        Don't see anything? Log in!
      </button>
      <a href="/logout" class="btn btn-secondary">Logout</a>
    </>
  )
}