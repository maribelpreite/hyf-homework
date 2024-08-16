import express from 'express';
import { readFile } from 'node:fs/promises';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function readJSONFile (filePath) {
    try {
        const data = await readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Something went wrong while trying to read JSON file:', error);
        throw error;
    }
}

app.get("/search", async (req, res) => {
    try {
        const document = await readJSONFile('./documents.json');
        const query = req.query.q;

        if (query) {
            const filteredSearch = document.filter(obj => {
                return Object.values(obj).some(value => {
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(query.toLowerCase());
                    } 
                    return false;
                })
            })
            res.json(filteredSearch);

        } else {
            res.json(document);
        }

    } catch (error) {
        console.error('Something went wrong while trying to search for your document:', error)
        res.status(500).json({error: 'Error while processing your request.'})
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});