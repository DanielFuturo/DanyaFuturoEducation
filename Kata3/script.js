const rl = require('./readline');
const terrainElements = [' ', ':', '!', ';','\'','\"','\\','.',',','#','$','%', '_', '^','&','*'];

let terrain = new Array();
let curPosition = 0;
let oldBackgroundValue;
let newBackgroundValue;
let height;
let width;

let stdin = process.openStdin();

Start();

function Start() {
    AskForHeight();
}

function AskForHeight() {
    rl.question(`Type height: `, (answer) => {
        height = Number(answer);
        AskForWidth();
    });
}

function AskForWidth() {
    rl.question(`Type width: `, (answer) => {
        width = Number(answer);
        FillTerrain();
    });
}

function FillTerrain() {
    let numbTrees = Math.floor(height * width / 50);
    let numbRocks = Math.floor(height * width / 25);

    for(i = 1; i <= height * width; i++)
    {
        if(i - width <= 0 || i + width > height * width)
            terrain.push('-');
        else if(!((i-1)%width) || !(i%width))
            terrain.push('|');
        else 
        {
            let index = Math.round(Math.random()*terrainElements.length);
            index = index == 0 ? index : index - 1;
            terrain.push(terrainElements[index]);
        }
    }
    SetStartPosition();
}

function Moving() {
    stdin.setRawMode(true);
    console.clear();
    DrawTerrain();
    stdin.on('keypress', (chuck, answer) => {
        oldBackgroundValue = newBackgroundValue;
        terrain[curPosition] = oldBackgroundValue;
        if(answer.name == 'up')
        {
            if(curPosition - (2 *width) >= 0)
            {
                curPosition = curPosition - width;
            }
        }
        else if(answer.name == 'right')
        {
            if((curPosition+2) % width)
            {
                curPosition = curPosition + 1;            
            }
        }
        else if(answer.name == 'left')
        {
            if((curPosition-1) % width)
            {
                curPosition = curPosition - 1;
            }
        }
        else if(answer.name == 'down')
        {
            if((curPosition + (2*width)) < (height * width))
            {
                curPosition = curPosition + width;
            }
        }
        newBackgroundValue = terrain[curPosition];
        terrain[curPosition] = 1;
        console.clear();
        DrawTerrain();
        console.log(curPosition);
        console.log(newBackgroundValue);
    });
}

function SetStartPosition() {
    curPosition = Math.floor(Math.random() * height * width);
    if(curPosition - width < 0)
        curPosition+= width;
    else if(curPosition + width > width*height)
        curPosition-=width;
    else if(!((curPosition+1)%width))
        curPosition-=1;
    else if(!((curPosition-1)%width))
        curPosition+=1;
    newBackgroundValue = terrain[curPosition];
    terrain[curPosition] = 1;
    Moving();
}

function DrawTerrain() {
    let row = "";
    for(i = 1; i <= height * width; i++)
    {
        row += terrain[i - 1];
        if(i >= width && !(i % width))
        {
            console.log(row);
            row = "";
        }
    }
}

