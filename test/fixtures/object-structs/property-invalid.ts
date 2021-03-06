import { struct } from '../../..'

const address = struct.object({
  street: 'string',
  city: 'string',
})

export const Struct = struct.object({
  address,
})

export const data = {
  address: {
    street: '123 fake st',
    city: false,
  },
}

export const error = {
  path: ['address', 'city'],
  value: false,
  type: 'string',
}
