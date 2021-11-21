# Mythical Wars, the API

Mythical Wars is an application that allows users to create technical assessments for front-end students at the [Turing School of Software and Design](https://turing.io/).

## Endpoints

<table>
  <tr>
    <td align="center">Description</td>
    <td align="center">URL</td>
    <td align="center">Method</td>
    <td align="center">Required Properties for Request</td>
    <td align="center">Sample Successful Response</td>
  </tr>
  <tr>
    <td>Get all test families</td>
    <td>https://mythical-wars-api.herokuapp.com/families</td>
    <td>GET</td>
    <td>none</td>
    <td>an array of all family objects<br />{ [ { id: 1, mod: 2, tests: [ 1, 2 ], title: "Kitties", datasets: [ "dataset #1", "dataset #2" ] }, ... ] }</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

## Technologies Used
This is a single-page application utilizing [React](https://reactjs.org/) and [React Router](https://reactrouter.com/). It is written in [TypeScript](https://www.typescriptlang.org/) and tested using [Cypress](https://www.cypress.io/). I am using [GitHub Actions](https://github.com/features/actions) for CI/CD. It is deployed to [Firebase](https://firebase.google.com/) Hosting as a [PWA](https://web.dev/progressive-web-apps/), and I am using features found in both to cache resources to the client allowing this app to be fully functional even in offline mode. I am using [Tailwind CSS](https://tailwindcss.com/) utility classes and [Material UI](https://mui.com/) components to make it look decent.

## Install
1. Clone down this repository `git clone https://github.com/alexmkio/mythical-wars-api`
2. CD into your local clone `cd mythical-wars-api`
3. Install project dependencies `npm install`
4. Run `npm start`
5. Open `http://localhost:6000/` in your preferred browser

## Contributors
This application was built by [Alex Kio](https://github.com/alexmkio/); a Front End Engineering, Mod 3 student at the [Turing School of Software and Design](https://turing.io/).
