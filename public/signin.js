
// $('#signin').click(function() {
//   event.preventDefault();

// })


// server-side
function uportConnect () {
  // Request credentials to login
  $('#signin').click(function(e) {
    e.preventDefault()
    $.ajax({
        method: "GET",
        url: "/signin"
      })
        // With that done, the data is returned & you can do stuff w/ it...
        .done(function(data) {
          // TODO: do something with data object
          console.log(data);
      });
    })

    // Attest specific credentials
    // uport.attestCredentials({
    //   sub: THE_RECEIVING_UPORT_ADDRESS,
    //   claim: {
    //     CREDENTIAL_NAME: CREDENTIAL_VALUE
    //   },
    //   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    // })

    // Export web for signing transactions later
    // const web3 = uport.getWeb3()
    // export { web3, uport, MNID }

};


var main = function() {
  uportConnect()
}

$(document).ready(function() {
  main()
})