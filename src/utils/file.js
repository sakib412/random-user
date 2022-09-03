import fs from 'fs';
import path from 'path'

export const readFile = (relPath = '../db/users.json') => {
    const str = fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf-8' })
    return JSON.parse(str)
}

export const writeFile = (data, relPath = '../db/users.json') => {
    fs.writeFileSync(path.join(__dirname, relPath), JSON.stringify(data));
}