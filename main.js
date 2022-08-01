//input your name below
let name = 'Erik';

// 'MOB' will stand for 'Month Of Birth'
let MOB = 'october';

// 'DOB' will stand for 'Date Of Birth'
let DOB = 12;

//The following code should be able to determine what your sign is based on 'MOB' and 'DOB' and return it to you
const yourSign = () => {
    if (MOB === 'january' && DOB <= 19) {
        return 'Capricorn';
    } else if (MOB === 'january' && DOB > 19) {
        return 'Aquarius';
    } else if (MOB === 'february' && DOB <= 18) {
        return 'Aquarius';
    } else if (MOB === 'february' && DOB > 18) {
        return 'Pisces';
    } else if (MOB === 'march' && DOB <= 20) {
        return 'Pisces';
    } else if (MOB === 'march' && DOB > 20) {
        return 'Aries';
    } else if (MOB === 'april' && DOB <= 20) {
        return 'Aries';
    } else if (MOB === 'april' && DOB > 20) {
        return 'Taurus';
    } else if (MOB === 'may' && DOB <= 20) {
        return 'Taurus';
    } else if (MOB === 'may' && DOB > 20) {
        return 'Gemini';
    } else if (MOB === 'june' && DOB <= 20) {
        return 'Gemini';
    } else if (MOB === 'june' && DOB > 20) {
        return 'Cancer';
    } else if (MOB === 'july' && DOB <= 22) {
        return 'Cancer';
    } else if (MOB === 'july' && DOB > 22) {
        return 'Leo';
    } else if (MOB === 'august' && DOB <= 23) {
        return 'Leo';
    } else if (MOB === 'august' && DOB > 23) {
        return 'Virgo';
    } else if (MOB === 'september' && DOB <= 22) {
        return 'Virgo';
    } else if (MOB === 'september' && DOB > 22) {
        return 'Libra';
    } else if (MOB === 'october' && DOB <= 23) {
        return 'Libra';
    } else if (MOB === 'october' && DOB > 23) {
        return 'Scorpio';
    } else if (MOB === 'november' && DOB <= 22) {
        return 'Scorpio';
    } else if  (MOB === 'november' && DOB > 22) {
        return 'Sagittarius';
    } else if (MOB === 'december' && DOB <= 21) {
        return 'Sagittarius';
    } else if (MOB === 'december' && DOB > 21) {
        return 'Capricorn';
    } else {
        return 'Month or Date not valid';
    }
};

//Intro
console.log(`Hey ${name}, your Zodiac sign is ${yourSign()}. Based on that please do the following: `);


//The code below will randomly generate a sign the user should beware of
let randomNumber = Math.floor(Math.random() * 12);
let signBeware = '';
switch (randomNumber) {
    case 0:
      signBeware = 'Aries';
      break;
    case 1:
      signBeware = 'Taurus';
      break;
    case 2:
      signBeware = 'Gemini';
      break;
    case 3:
      signBeware = 'Cancer';
      break;
    case 4:
      signBeware = 'Leo';
      break;
    case 5:
      signBeware = 'Virgo';
      break;
    case 6:
      signBeware = 'Libra';
      break;
    case 7:
      signBeware = 'Sagittarius';
      break;
    case 8:
      signBeware = 'Capricorn';
      break;
    case 9: 
      signBeware = 'Aquarius';
      break;
    case 10:
        signBeware = 'Scorpio';
        break;
    case 11:
        signBeware = 'Pisces';
        break;
    default:
        signBeware = 'something went wrong'
        break;        
  };

  // frist random data generator, will give a different output if the first variable is the same as the second variable
yourSign() === signBeware ? console.log('Show more self Love') : console.log(`Beware this sign: ${signBeware}. Their intentions are not pure.`);

let randomNumber2 = Math.floor(Math.random() * 7);
let goodNews = '';
switch (randomNumber2) {
    case 0:
      goodNews = 'a secret admirer will soon send you a sign of affection.';
      break;
    case 1:
      goodNews = 'your heart is in a place to draw true happiness';
      break;
    case 2:
      goodNews = 'a thrilling time is in your near future.';
      break;
    case 3:
      goodNews = 'the one you love is closer than you think.';
      break;
    case 4:
      goodNews = 'plan for many pleasures ahead.';
      break;
    case 5:
      goodNews = 'something you lost will turn up soon.';
      break;
    case 6:
      goodNews = 'the stars are in your favor.';
      break;
    default:
        goodNews = 'something went wrong'
        break;        
  };

  //second random data generator
  console.log(`Lucky for you, ${goodNews}`);

let randomNumber3 = Math.floor(Math.random() * 7);
let motivation = '';
switch (randomNumber2) {
    case 0:
      motivation = 'Success is not final, failure is not fatal, it is the courage to continue that counts';
      break;
    case 1:
      motivation = 'It is better to fail in originality than to succeed in imitation';
      break;
    case 2:
      motivation = 'Success usually comes to those who are too busy looking for it';
      break;
    case 3:
      motivation = 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success';
      break;
    case 4:
      motivation = 'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty';
      break;
    case 5:
      motivation = 'Dont let yesterday take up too much of today';
      break;
    case 6:
      motivation = 'If you are working on something that you really care about, you dont have to be pushed. The vision pulls you';
      break;
    default:
        motivation = 'something went wrong'
        break;        
  };

// third random data generator
console.log(`Always remeber: ${motivation}.`);

