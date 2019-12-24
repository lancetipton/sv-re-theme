import { deepMerge, isArr, isObj, isStr, get } from 'jsutils'

/**
 * Joins rules from the theme together. Accepts unlimited rules objects
 * Subset rules can be passed in as an array of key names on the theme to join together
 * Or the the actual rules objects should be passed in
 *
 * @param {Object} arg1 - Theme, or subset of theme rules 
 * @param {Object|Array} arg2 - Subset of theme rules or an array of keys to join from the theme
 * @param {Array} sources - Array of subset theme rules to join together
 *
 * @returns {Object} - Joined theme rules
 */
export const joinRules = (arg1, arg2, ...sources) => {
  return isObj(arg1) && isArr(arg2) && (isStr(arg2[0]) || isArr(arg2[0]))
    ? deepMerge( ...arg2.map(arg => get(arg1, arg)) )
    : deepMerge(arg1, arg2, ...sources)
}