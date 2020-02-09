import { renderBreakpoints } from '@open-sorcerers/breakpoints'
import { useDefaultPainter, DEFAULT_BREAKPOINTS } from 'bodypaint'
import { map, pipe } from 'ramda'

export const mq = useDefaultPainter

export const Breakpoints = pipe(
  map(z => z + 'px'),
  renderBreakpoints
)(DEFAULT_BREAKPOINTS)
