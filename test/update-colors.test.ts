import { beforeAll, afterAll, expect, it, vi } from 'vitest'

import { updateColors } from '../extension/update-colors.js'

let npmIcon = `
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28V4H28V28H4Z" fill="#fb4934"/>
    <path d="M7.69231 9.53846H24.3077V24.3077H20.6154V13.2308H15.0769V24.3077H7.69231V9.53846Z" fill="#FBF1C7"/>
  </svg>
`

let updatedNpmIcon = `
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28V4H28V28H4Z" fill="#ffa500"/>
    <path d="M7.69231 9.53846H24.3077V24.3077H20.6154V13.2308H15.0769V24.3077H7.69231V9.53846Z" fill="#eee"/>
  </svg>
`

beforeAll(() => {
  vi.mock('../extension/find-nearest-color.js', () => ({
    findNearestColor: (_colors: string[], color: string) => {
      if (color === '#fb4934') {
        return '#ffa500'
      }
      return '#eee'
    },
  }))
})

afterAll(() => {
  vi.clearAllMocks()
})

it('converts colors', () => {
  expect(updateColors(npmIcon, ['#ffa500', '#eee'])).toBe(updatedNpmIcon)
})
