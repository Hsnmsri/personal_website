import { unlink, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
    const formData = await readMultipartFormData(event)
    if (!formData || formData.length === 0) {
        throw createError({ statusCode: 400, message: 'No file uploaded' })
    }

    const file = formData.find(f => f.name === 'file')
    if (!file || !file.filename) {
        throw createError({ statusCode: 400, message: 'Invalid file' })
    }

    const validExtensions = ['.pdf', '.doc', '.docx']
    const ext = file.filename.toLowerCase().slice(file.filename.lastIndexOf('.'))
    if (!validExtensions.includes(ext)) {
        throw createError({ statusCode: 400, message: 'Only PDF and DOC files are allowed' })
    }

    const uploadDir = join(process.cwd(), '.data', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    const filename = `cv${ext}`
    const filePath = join(uploadDir, filename)

    await writeFile(filePath, file.data)

    return { path: `/api/cv/download` }
})
