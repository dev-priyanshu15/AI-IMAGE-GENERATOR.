import {surpriseMePrompts} from "../constants"
import FileSaver from "file-saver"

/**
 * Generates a random prompt that is different from the given prompt.
 * @param {string} prompt - The current prompt to avoid duplicating.
 * @returns {string} A randomly selected prompt that is different from the input prompt.
 */
export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    if (randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

/**
 * Downloads an image and saves it as a JPEG file
 * @param {string} _id - Unique identifier for the image
 * @param {Blob} photo - The image data to be downloaded
 * @returns {void} This function doesn't return a value
 */
export async function downloadImage(_id,photo) {
    FileSaver.saveAs(photo , `download-${_id}.jpg`)
    
}