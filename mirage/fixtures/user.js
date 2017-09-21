import { faker } from 'ember-cli-mirage';
export default [
  {
    id: 1,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Kitty',
    lastName: 'Purry',
    userName: 'leftsharkfan',
    posts: []
  },
  {
    id: 2,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Cat',
    lastName: 'Damon',
    userName: 'IamJasonBourne',
    posts: []
  },
  {
    id: 3,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Dalai',
    lastName: 'Clawma',
    userName: 'BuddahMeow',
    posts: []
  },
  {
    id: 4,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Fuzz',
    lastName: 'Aldrin',
    userName: 'ToInfinityAndMeow',
    posts: []
  },
  {
    id: 5,
    profilePic: faker.image.cats(null, null, true),
    firstName: 'Puma',
    lastName: 'Thurman',
    userName: 'TheBride',
    posts: []
  }

];
