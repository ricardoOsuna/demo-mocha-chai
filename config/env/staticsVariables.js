module.exports = {
  regExps: {
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/g,
    phoneNumber: /^\d+$/g,
    letters: /^[a-zA-Z\s]+$/g,
    date: /^\d{4}-\d{2}-\d{2}$/g,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g,
  }
};
