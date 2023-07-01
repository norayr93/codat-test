# Codat Embedded Link SDK


> 🚧 Beta testing
> 
> Embedded Link is in the beta phase. If you want to use the Embedded Link solution, please [get in touch](mailto:embedded-link@codat.io).
> 
> You can also [request features and suggest improvements](https://portal.productboard.com/codat/7-product-roadmap/c/485-embed-a-pre-built-auth-flow-in-your-website-or-app) to the component.

**Full documentation can be found [here](https://docs.codat.io/docs/authorize-embedded-link)**

## Prerequisites

You should use React 17 or 18 when embedding the Link component into your webpage or application.

## Getting started

You can install this library using npm:
```
npm i @codat/link-sdk
```
After installing the library, instantiate it in your own project:
```
import { CodatLink } from '@codat/link-sdk';
import '../node_modules/@codat/link-sdk/index.css';
```

## Embedding the Link application

The component requires a `companyId` parameter to open Link for a specific company. To obtain the `companyId`, first [create a Codat company](https://docs.codat.io/docs/managing-companies) for your customer. We recommend doing that at the same time as your SMB customer signs up within your app.

From the response to company creation, retain the `companyId` parameter. Then, initialize the Codat Link component in your app:
```
<CodatLink
    companyId="a00a0a00-0a0a-a0aa-0000a00aa00a"
    onConnection={(id) => alert('Success: Connection ' + id + ' established')} // Called each time a connection is established
    onClose={() => alert('Closed')} // Called when the user clicks 'X'
    onError={(err) => alert('Error: ' + err)} // Called when an error is reached
    onFinish={() => alert("Finished")} // Called when user completes the whole flow
/>
```
## Getting help

To report issues with this library, please [get in touch](mailto:embedded-link@codat.io) with us.

## Pitfalls

- Disable React.StrictMode
- The Embedded Link component is not optimized for use on mobile devices.
