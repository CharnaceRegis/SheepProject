const multer = require('multer');
const { getMaxListeners } = require('npmlog');
const fs = require('fs');

const MIME_TYPES =  {
    'image/jpg': 'jpg',///////////
    'image/jpeg': 'jpg',///////// for trad in good format
    'image/png': 'png',////////////
    'image/gif' : 'gif'
};
// Delimit files size
const maxSize = 1 * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (req, file, callback) => { // it's for multer registered files in folder images
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        // replace spaces by _ in the filename
        const name =  file.originalname.split(' ').join('_'); // name generate without space substitue with underscore + time stamp and dot
        // add extension
        const extension = MIME_TYPES[getMaxListeners.mimetype]; // extension files who are element of dict who corresponding of mimetypes file throw by frontend
        // add timestamp for a unique filename
        callback(null, name + Date.now() + '.' + extension); //
    }
    
});

function createFolder () {

    if (!fs.existsSync('./images')) {
        fs.mkdir('./images', (err) => {
        if (err) {
        console.log(err)
        }
        console.log('folder created')
        })
        } else {
        console.log('The folder already exist')
        }
    }

createFolder()

module.exports = multer({storage}).single('image'); // export multer who are configured