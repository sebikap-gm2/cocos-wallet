# Cocos Wallet


## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn run ios -c
   ```

## Decision log
<table>
  <tr>
    <th style="width: 10%;">Topic</th>
    <th style="width: 20%;">Discarded Alternatives</th>
    <th style="width: 10%;">Decision</th>
    <th style="width: 60%;">Explanation</th>
  </tr>
  <tr>
    <td>Stack</td>
    <td>RN, Flutter, Ionic, Native apps</td>
    <td>Expo</td>
    <td>Expo is a framework that uses RN under the hood. Expo manages the native part of RN. It also provides an extensive toolkit that helps solve many typical requirements, such as navigation, camera, location, and more. It also provides the ability to The counterpart is that since it's built over RN, it does not provide all the functionality RN provides, but it is more than enough for most use cases.</td>
  </tr>
  <tr>
    <td>Styling</td>
    <td>Inline styles, Styled components, Component library </td>
    <td>RN Stylesheet</td>
    <td>There are many options for styling in RN, where all of them imitate CSS syntax, and then convert it to native styles behind the scenes. Inline styling mixes code and structure with styling, which ends up being a bit verbose. Styled components, in its plain <a href="https://styled-components.com/docs/basics#react-native">Styled Components</a> version, or with Tailwind, called <a href="https://www.nativewind.dev/">Nativewind</a>, is a great option to imitate the web way of styling, but it comes with a hit in performance. Component libraries are a great way to start a project quickly, but many times end up restricting customization. RN Stylesheet is basically styled components but component based, avoiding putting the styles inline, and allowing full customization. A component library could have been the way to go, but since this is a FE/Mobile tech challenge, I decided against it. Styled components/Nativewind is a great option as well, it will depend on the project, in this case native RN Stylesheet provided the structure necessary without over bloating the code.</td>
  </tr>
  <tr>
    <td>Design</td>
    <td>Binance, Robinhood</td>
    <td>Coinbase app</td>
    <td>Coinbase was the selected decision as it provided a plain UI, with a bit of navigaton play, that was able to display expo router at work. |</td>
  </tr>
  <tr>
    <td>Global state management </td>
    <td>Redux, Contex, Jotai, Zustand, Recoil</td>
    <td>MOBX</td>
    <td></td>
  </tr>
</table>
