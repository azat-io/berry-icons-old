export let createHashedName = (config: { id: string; hash: string }): string =>
  `${config.id}-${config.hash}`
