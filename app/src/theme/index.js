import { display } from './display'
import { join } from './join'
import { padding, margin, flex, layout } from './layout'
import { setDefaultTheme } from 're-theme'

export const theme = setDefaultTheme({
  display,
  flex,
  join,
  layout,
  margin,
  padding,
})