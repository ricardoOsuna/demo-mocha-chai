const dummyData = {
  firstName: 'Ricardo Isaac',
  lastName: 'Osuna Castillo',
  birthdate: '1994-06-06',
  email: 'r.osuna.castillo@gmail.com',
  password: 'O6061994r',
  phone: '6691167862',
};
module.exports = {
  data: [
    {
      title: 'Shouldn´t create user without first name',
      data: {
        ...dummyData,
        firstName: undefined
      },
      expect: expect400('The First Name is required')
    },
    {
      title: 'Shouldn´t create user with empty first name',
      data: {
        ...dummyData,
        firstName: ''
      },
      expect: expect400('The First Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted first name (number)',
      data: {
        ...dummyData,
        firstName: 24957924
      },
      expect: expect400('The First Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted first name (array)',
      data: {
        ...dummyData,
        firstName: []
      },
      expect: expect400('The First Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted first name (object)',
      data: {
        ...dummyData,
        firstName: {}
      },
      expect: expect400('The First Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted first name (object)',
      data: {
        ...dummyData,
        firstName: {
          data: 'number'
        }
      },
      expect: expect400('The First Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with less characters than accept in first name',
      data: {
        ...dummyData,
        firstName: 'Lore'
      },
      expect: expect400('The First Name must be between 5 - 100 characters')
    },
    {
      title: 'Shouldn´t create user with more characters than accept in first name',
      data: {
        ...dummyData,
        firstName: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Donec viverra tincidunt magna eget posuere yehjrkkdh'
      },
      expect: expect400('The First Name must be between 5 - 100 characters')
    },
    {
      title: 'Shouldn´t create user without last name',
      data: {
        ...dummyData,
        lastName: undefined
      },
      expect: expect400('The Last Name is required')
    },
    {
      title: 'Shouldn´t create user with corrupted last name (number)',
      data: {
        ...dummyData,
        lastName: 24957924
      },
      expect: expect400('The Last Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted last name (array)',
      data: {
        ...dummyData,
        lastName: []
      },
      expect: expect400('The Last Name is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted last name (object)',
      data: {
        ...dummyData,
        lastName: {}
      },
      expect: expect400('The Last Name is corrupted')
    },
    {
      title: 'Shouldn´t create user without birthdate',
      data: {
        ...dummyData,
        birthdate: undefined
      },
      expect: expect400('The Birthdate is required')
    },
    {
      title: 'Shouldn´t create user with invalid birthdate (string)',
      data: {
        ...dummyData,
        birthdate: 'mi cumpleaños'
      },
      expect: expect400('The Birthdate is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted birthdate (invalid format)',
      data: {
        ...dummyData,
        birthdate: '06-06-94'
      },
      expect: expect400('The Birthdate is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted birthdate (invalid format)',
      data: {
        ...dummyData,
        birthdate: '06-06-1994'
      },
      expect: expect400('The Birthdate is corrupted')
    },
    {
      title: 'Shouldn´t create user with corrupted birthdate (invalid format)',
      data: {
        ...dummyData,
        birthdate: '94-06-06'
      },
      expect: expect400('The Birthdate is corrupted')
    },
    {
      title: 'Shouldn´t create user with invalid birthdate (invalid year)',
      data: {
        ...dummyData,
        birthdate: '0000-13-06'
      },
      expect: expect400('The Birthdate isn´t valid')
    },
    {
      title: 'Shouldn´t create user with invalid birthdate (invalid month)',
      data: {
        ...dummyData,
        birthdate: '1994-13-06'
      },
      expect: expect400('The Birthdate isn´t valid')
    },
    {
      title: 'Shouldn´t create user with invalid birthdate (invalid day)',
      data: {
        ...dummyData,
        birthdate: '1994-03-32'
      },
      expect: expect400('The Birthdate isn´t valid')
    },
    {
      title: 'Shouldn´t create user with invalid birthdate (invalid date)',
      data: {
        ...dummyData,
        birthdate: '1994-02-30'
      },
      expect: expect400('The Birthdate isn´t valid')
    },
    {
      title: 'Shouldn´t create user without email',
      data: {
        ...dummyData,
        email: undefined
      },
      expect: expect400('The Email is required')
    },
    {
      title: 'Shouldn´t create user with invalid email (without @ and domain)',
      data: {
        ...dummyData,
        email: 'rosuna'
      },
      expect: expect400('The Email isn´t valid')
    },
    {
      title: 'Shouldn´t create user with invalid email (without domain)',
      data: {
        ...dummyData,
        email: 'rosuna@'
      },
      expect: expect400('The Email isn´t valid')
    },
    {
      title: 'Shouldn´t create user with less characters than accept in email',
      data: {
        ...dummyData,
        email: 'rosuna@r'
      },
      expect: expect400('The Email must be between 16 - 35 characters')
    },
    {
      title: 'Shouldn´t create user with more characters than accept in email',
      data: {
        ...dummyData,
        email: 'rosuna@ricardoisaacosunacastillo.com'
      },
      expect: expect400('The Email must be between 16 - 35 characters')
    },
    {
      title: 'Shouldn´t create user without password',
      data: {
        ...dummyData,
        password: undefined
      },
      expect: expect400('The Password is required')
    },
    {
      title: 'Shouldn´t create user with empty password',
      data: {
        ...dummyData,
        password: ''
      },
      expect: expect400('The Password is empty')
    },
    {
      title: 'Shouldn´t create user with less characters than accept in password',
      data: {
        ...dummyData,
        password: 'ge2fk4'
      },
      expect: expect400('The Password must be between 8 - 20 characters')
    },
    {
      title: 'Shouldn´t create user with more characters than accept in password',
      data: {
        ...dummyData,
        password: 'rk43n4lñ3nlkwdiv98439g439h43g3g43g4k3ng4io4i3g34g4u3oo43ig43iggg'
      },
      expect: expect400('The Password must be between 8 - 20 characters')
    },
    {
      title: 'Shouldn´t create user with corrupted password',
      data: {
        ...dummyData,
        password: '8password'
      },
      expect: expect400('The Password is corrupted')
    },
    {
      title: 'Shouldn´t create user without phone',
      data: {
        ...dummyData,
        phone: undefined
      },
      expect: expect400('The Phone is required')
    },
    {
      title: 'Should create user',
      data: {
        ...dummyData
      },
      expect: expect200()
    },
    {
      title: 'Shouldn´t create user if email alredy exist',
      data: {
        ...dummyData,
        email: 'r.osuna.castillo@gmail.com'
      },
      expect: expect400('This email is alredy in use by some user')
    },
    {
      title: 'Shouldn´t create user if phone alredy exist',
      data: {
        ...dummyData,
        email: 'riki90mzt@gmail.com',
        phone: '6691167862'
      },
      expect: expect400('This phone is alredy in use by some user')
    },
  ]
};
