import { faker } from 'ember-cli-mirage';
export default [
  {
    id: 1,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Kitty',
    lastName: 'Purry',
    userName: 'leftsharkfan'
  },
  {
    id: 2,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Cat',
    lastName: 'Damon',
    userName: 'IamJasonBourne'
  },
  {
    id: 3,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Dalai',
    lastName: 'Clawma',
    userName: 'BuddahMeow'
  },
  {
    id: 4,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Fuzz',
    lastName: 'Aldrin',
    userName: 'SpaceKitteh'
  },
  {
    id: 5,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Puma',
    lastName: 'Thurman',
    userName: 'TheBride'
  },
  {
    id: 6,
    profilePic: '/profile-pic.jpg',
    firstName: 'Officer',
    lastName: 'Rabbit',
    userName: 'RightMeow'
  }

];
