import { describe, expect, it } from 'vitest'

import { createHashedName } from '../extension/create-hashed-name.js'

describe('create-hashed-name', () => {
  it('creates name with hash', () =>
    expect(createHashedName({ id: 'id', hash: 'hash' })).toBe('id-hash'))
})
