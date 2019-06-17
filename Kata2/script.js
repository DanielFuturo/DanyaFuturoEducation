var fs = require('fs');
var jpeg = require('jpeg-js');

GetFile();

function GetFile()
{
    var img = fs.readFileSync('./img/coloredImg.jpg');
    img = ChangeImageColor(img);
    fs.writeFileSync('./img/greyscaleImage.jpg', img.data);
}

function ChangeImageColor(img) {
    let imageData = jpeg.decode(img, true);
    let data = imageData.data;
    data = ChangeColor(data);
    imageData.data = data;
    return jpeg.encode(imageData);
}

function ChangeColor(data) {
    for(i = 0; i < data.length; i += 4)
    {
        data[i] = data[i+1] = data[i+2] = (Math.max(data[i], data[i+1], data[i+2]) + Math.min(data[i], data[i+1], data[i+2]))/3;
    }
    return data;
}



