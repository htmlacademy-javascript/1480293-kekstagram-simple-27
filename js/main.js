let id = 1;
let i = 1;
let j = 1;

const DESCRIPTION = [
  'Закат',
  'Небо',
  'Рассвет',
  'Ночь',
  'День',
  'Красота',
];

const LIKES = {
  MIN: 15,
  MAX: 250,
};

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Артем',
  'Петя',
  'Вася',
  'Света',
  'Катя',
  'Игорь',
];

const NAMBERS_PHOTOS = 25;

const NAMBERS_COMMENTS = 3;

function getRandomIntInclusive(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  if ( a > b) {
    [a, b] = [b, a];
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a; //Максимум и минимум включаются
}

function getStringLength (string, b) {
  return string.length <= b;
}

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createComments = function () {
  return {
    id: j++,
    avatar: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,
    message: Array.from({length: getRandomIntInclusive(1,2)},() => getRandomArrayElement(MESSAGE)),
    name: getRandomArrayElement(NAME),
  };
};

const createPhotoDescription = function () {
  return {
    id: id++,
    URL: `photos/${i++}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomIntInclusive(LIKES.MIN, LIKES.MAX),
    comments: Array.from({length: NAMBERS_COMMENTS}, createComments),
  };
};

const photoDescription = Array.from({length: NAMBERS_PHOTOS}, createPhotoDescription);

console.log(photoDescription);

getStringLength ('ab', 8);
