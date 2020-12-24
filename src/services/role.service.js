export default {
  get() {
    return [
      {
        value: 'ADMIN',
        label: 'Administrator',
      },
      {
        value: 'USER',
        label: 'User',
      },
    ];
  },
  getRole(value) {
    const filtered = this.get().filter(r => r.value === value);
    if (!filtered || filtered.length === 0) {
      return '';
    }
    if (filtered.length > 1) {
      throw new Error('To much roles');
    }
    return filtered[0].label;
  },
};
