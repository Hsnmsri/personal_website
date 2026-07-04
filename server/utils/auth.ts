import crypto from 'crypto'

export function hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
    const [salt, hash] = stored.split(':')
    const attempt = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex')
    return attempt === hash
}

export function createToken(secret: string): string {
    const payload = Date.now().toString(36)
    const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex')
    return `${payload}.${signature}`
}

export function verifyToken(token: string, secret: string): boolean {
    const parts = token.split('.')
    if (parts.length !== 2) return false
    const [payload, signature] = parts
    const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex')
    return signature === expected
}
