import { model } from './google.js'

async function askQuestionGemin(question) {
    return new Promise(async (resolve, reject) => {
        // console.log("question asked :: ", question);
        try {
            const result = await model.generateContent(question);
            // console.log("result :: ", result);
            resolve(result.response.candidates[0].content.parts)
        }
        catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

export { askQuestionGemin };