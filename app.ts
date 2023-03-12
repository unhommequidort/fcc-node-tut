import { readFile, writeFile } from 'fs/promises';
// import util from 'util';

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME! ${first} ${second}`,
      { flag: 'a' }
    );
  } catch (error: unknown!) {
    console.log(error.message);
  }
};

start();

// const getText = (path: string): Promise<NodeJS.ErrnoException | string> => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
