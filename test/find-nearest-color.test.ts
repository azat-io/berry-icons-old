import { describe, expect, it } from 'vitest'

import { findNearestColor } from '../extension/find-nearest-color.js'
import { gruvbox } from '../theme/gruvbox.js'

describe('find-nearest-color', () => {
  it('finds nearest color', () => {
    expect(findNearestColor([], '#eee')).toBe('#eee')
    expect(findNearestColor(['#fff', '#000'], '#eee')).toBe('#fff')
    expect(findNearestColor(['#ff0000', '#0000ff'], '#00008b')).toBe('#0000ff')
    expect(findNearestColor(gruvbox.colors, '#d0db4f')).toBe('#b8bb26')
  })
})
