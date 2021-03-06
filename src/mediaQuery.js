/*eslint-disable */
import { css } from 'styled-components'
import defaultBreakpoints from './defaultBreakpoints'


// iterate through the sizes and create a media template
const mediaQuery = (userBreakpoints) => {
  const availableBreakpoints = userBreakpoints || defaultBreakpoints
  const acumulatedMedia = Object.keys(availableBreakpoints).reduce((accumulator, obj) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSizeMin = availableBreakpoints[obj].min / 16
    const emSizeMax = availableBreakpoints[obj].max / 16
    accumulator[obj] = (...args) => {
      if (emSizeMin && emSizeMax) {
        return css`
          @media (max-width: ${emSizeMax}em) and (min-width: ${emSizeMin}em) {
            ${css(...args)};
          }
        `
      } else if (!emSizeMin && emSizeMax) {
        return css`
          @media (max-width: ${emSizeMax}em) {
            ${css(...args)};
          }
        `
      } else if (emSizeMin && !emSizeMax) {
        return css`
          @media (min-width: ${emSizeMin}em) {
            ${css(...args)};
          }
        `
      }
    }
    return accumulator
  }, {})
  return acumulatedMedia
}

export default mediaQuery
