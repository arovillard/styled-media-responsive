// define all devices by setting min and max where applicable, for devices where
// only min is set, then the media query rule will be 'min-width'. When only defining
// max, then the media query rule will be 'max-width'. If both are defined,
// then the media query rule will be 'max-width and min-width'.

export default defaultBreakpoints = {
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
