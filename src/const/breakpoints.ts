import { getGlobalValue, getNumberFromString } from '../helpers/getFromCSS'

export const breakpoints = {
  mobile: getNumberFromString(getGlobalValue('--mobile-size')),
  laptop: getNumberFromString(getGlobalValue('--laptop-size')),
}
