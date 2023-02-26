import { expect, it } from 'vitest'

import { createHashedName } from '../extension/create-hashed-name.js'

it('creates name with hash', () =>
  expect(createHashedName({ id: 'id', hash: 'hash' })).toBe('id-hash'))
