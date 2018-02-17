import { Connect, SimpleSigner } from 'uport-connect'
require('dotenv').config()

const uport = new Connect('Bear Care', {
  clientId: process.env.CLIENT_ID,
  network: 'rinkeby or ropsten or kovan',
  signer: SimpleSigner(process.env.SIGNING_KEY)
})

// Request credentials to login
uport.requestCredentials({
  requested: ['name', 'phone', 'country'],
  notifications: true // We want this if we want to recieve credentials
})
.then((credentials) => {
  // Do something
  console.log('It worked!')
  console.log(credentials)
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
const web3 = uport.getWeb3()
export { web3, uport, MNID }