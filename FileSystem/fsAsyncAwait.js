const fs = require('fs');
const path = require('path');


const fileName = 'fsAsyncAwait.txt';
const filePath = path.join(__dirname, fileName);



//For reading directory

const file = __dirname;

const readFolder = async () => {
    try {
        const res = await fs.promises.readdir(file);
        console.log(res);
    } catch (error) {
        console.error(error)
    }
}

readFolder();


/*
// fs.promises.writeFile(): writes data to a file asynchronously. if the file exists, it overwrites the content.
//! SYNTAX: fs.promises.writeFile(path, data, options)

//? Path: The file Path to write to
//? Data: The content to write to the file
//? Options: Optional, specifies encoding (eg.., 'utf-8'), mode, or flags.
*/


const createFile = async () => {
    try {
      await fs.promises.writeFile(filePath, 'This is my initial data', 'utf-8');
        console.log('File has created successfully');
    } catch (error) {
        console.error(error)
    }
}

createFile();


/*
// Reading a File: fs.promises.readFile(): Reads the content of a file asynchronously.
//! SYNTAX: fs.Promises.readFile(path, options);

//? Path: The file path to read
//? Options: Optional, can specify encoding (eg.., 'utf-8'), or returns a buffer if no encoding is provided.

*/

const readFile = async () => {
    try {
    const res =  await fs.promises.readFile(filePath, 'utf-8')
    console.log(res)
    } catch (error) {
        console.error(error)
    }
}

readFile();


/*
// Append Data: fs.promises.appendFile(): Adds content to the end of file, If the file does not exists.
//  it creates a new one
// SYNTAX!:  fs.promises.appendFile(filePath, data, options);

//? path: Path to the file
//? data: Data to be added in a file
//? options: encoding ('utf-8');
*/

const appendFile = async () => {
    try {
          await fs.promises.appendFile(filePath, "\nThis is my updated initial data", 'utf-8');
        console.log('Data has been updated/added successfully')
    } catch (error) {
        console.error(error)
    }
}


appendFile()



/*
// Deleting a File: fs.promises.unlink() : Deletes a file by its path.
//! SYNTAX: fs.promises.unlink(path)

//? path: The file Path to delete.
*/


// const deleteFile = async () => {
 //   try {
   //     await fs.promises.unlink(filePath);
   //     console.log('File has deleted successfully!')
  //  } catch (error) {
    //    console.error(error)
   // }
// }

// deleteFile()