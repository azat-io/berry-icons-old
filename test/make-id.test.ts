import { describe, expect, it } from 'vitest'

import { makeId } from '../extension/make-id.js'

describe('make-id', () => {
  it('generates unique identifier', () => {
    let numberOfElements = 100
    let array: string[] = []

    for (let i = 0; i < numberOfElements; i++) {
      array.push(makeId())
    }

    expect(new Set(array)).toHaveLength(numberOfElements)
  })
})
