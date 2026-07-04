import { join } from 'path'
import { readFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
    const uploadDir = join(process.cwd(), '.data', 'uploads')

    const files = ['cv.pdf', 'cv.docx', 'cv.doc']
    let file: Buffer | null = null
    let ext = ''

    for (const f of files) {
        try {
            file = await readFile(join(uploadDir, f))
            ext = f.slice(f.lastIndexOf('.'))
            break
        } catch { }
    }

    if (!file) {
        throw createError({ statusCode: 404, message: 'No CV file found' })
    }

    const mimeTypes: Record<string, string> = {
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    }

    return new Response(file, {
        headers: {
            'Content-Type': mimeTypes[ext] || 'application/octet-stream',
            'Content-Disposition': `attachment; filename="cv${ext}"`,
            'Content-Length': file.length.toString(),
        },
    })
})
