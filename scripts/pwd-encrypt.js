const bcrypt = require('bcrypt');

const encrypt = (password) => {
  return new Promise((resolve, reject) => {
    try {
      const pwd = bcrypt.hash(password, 8);
      resolve(pwd);
    } catch (error) {
      reject(error);
    }
  });
};

const args = process.argv.slice(2);
console.log(args);

if (args && args.length > 0) {
  args.forEach(arg => {
    encrypt(arg)
    .then((res) => {
      console.log(arg, res);
    })
    .catch(console.error);
  })
} else {
  console.warn('Vous devez renseigner au moins 1 mot de passe');
}
