# styled-grid-responsive
Everything needed to make your `styled-components` 💅 React Application responsive using media queries.

# Installation:
`npm install styled-media-responsive`

# Breakpoints:
you can use the default breakpoints or set your own by passing them to the function. See example below

Default breakpoints:

 ````javascript
   defaultDevices: {
     phone: {
       max: 768
     },
     tablet: {
       min: 768,
       max: 1160
     },
     desktop: {
       min: 1160,
       max: 1400
     },
     large: {
       min: 1400
     }
   }
 ````

# Importing the default breakpoints into your app (if needed):
````javascript
 import { defaultBreakpoints } from 'styled-media-responsive'
````

# mediaQuery Usage:
The order in which we declare these matter since they share a starting and ending point,
the best practice would be to declare the media queries in descending order (unless that's not the desired behaviour)

````javascript
  // If using the default breakpoints:
  import mediaQuery from 'styled-grid-responsive'

  export const media = mediaQuery()


  // If using your own breakpoints:

  import mediaQuery from 'styled-grid-responsive'

  const breakpoints = {
    smallPhone: {
      max: 576
    },
    mediumPhone: {
      min: 576,
      max: 768
    },
    tablet: {
      min: 768,
      max: 992
    },
    desktop: {
      min: 992,
      max: 1200
    },
    reallyLarge: {
      min: 1200,
    }
  }

  export const media = mediaQuery(breakpoints)

 ---------------------------------

 // on your styled components definitions
  import styled from 'styled-components'
  import { media } from '../path-to-where-defined'

  // this example assumes you are not defining your own breakpoints, if you are,
  // you would do media.nameOfYourBreakpoint

  export const SuperComponent = styled.div`
    background-color: yellow;
    ${media.desktop`
      background-color: red;
    `}
    ${media.tablet`
      background-color: blue;
    `}
    ${media.phone`
      background-color: green;
    `}
  `

````
