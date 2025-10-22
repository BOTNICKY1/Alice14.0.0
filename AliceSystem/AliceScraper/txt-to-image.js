//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source
WhatsApp : https://wa.me/6281543496975
Tele me : https://t.me/XyrooRynzz
instagram : https://instagram.com/biionlyyone
WhatsApp: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
const fetch = require("node-fetch")

async function anime(Prompt) {
    const postResponse = await fetch('https://aicharalab.com/api/character/character-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://aicharalab.com/ghibli-ai-generator'
        },
        body: JSON.stringify({
            prompts: Prompt,
            negative: "",
            image_style: "anime",
            style_transfer: 0,
            aspect_ratio: "1:1",
            number: 1
        })
    });

    const postResult = await postResponse.json();
    const taskId = postResult.data.task_id;

    while (true) {
        const getResponse = await fetch(`https://aicharalab.com/api/dash/task-status?task_id=${taskId}&project_name=character`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://aicharalab.com/ghibli-ai-generator'
            }
        });

        const getResult = await getResponse.json();
        
        if (getResult.status === 100000) {
            return getResult.data.result[0];
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }
}

async function ghibli(Prompt) {
    const postResponse = await fetch('https://aicharalab.com/api/character/character-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://aicharalab.com/ghibli-ai-generator'
        },
        body: JSON.stringify({
            prompts: Prompt,
            negative: "",
            image_style: "ghibli",
            style_transfer: 0,
            aspect_ratio: "1:1",
            number: 1
        })
    });

    const postResult = await postResponse.json();
    const taskId = postResult.data.task_id;

    while (true) {
        const getResponse = await fetch(`https://aicharalab.com/api/dash/task-status?task_id=${taskId}&project_name=character`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://aicharalab.com/ghibli-ai-generator'
            }
        });

        const getResult = await getResponse.json();
        
        if (getResult.status === 100000) {
            return getResult.data.result[0];
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }
}
async function pixel(Prompt) {
    const postResponse = await fetch('https://aicharalab.com/api/character/character-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://aicharalab.com/ghibli-ai-generator'
        },
        body: JSON.stringify({
            prompts: Prompt,
            negative: "",
            image_style: "pixel art",
            style_transfer: 0,
            aspect_ratio: "1:1",
            number: 1
        })
    });

    const postResult = await postResponse.json();
    const taskId = postResult.data.task_id;

    while (true) {
        const getResponse = await fetch(`https://aicharalab.com/api/dash/task-status?task_id=${taskId}&project_name=character`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://aicharalab.com/ghibli-ai-generator'
            }
        });

        const getResult = await getResponse.json();
        
        if (getResult.status === 100000) {
            return getResult.data.result[0];
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }
}

module.exports = { anime, ghibli, pixel }