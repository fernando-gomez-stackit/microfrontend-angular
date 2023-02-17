module.exports = {
  name: 'customers',
  exposes: {
    './Module': 'apps/customers/src/app/remote-entry/entry.module.ts',
  },
};
