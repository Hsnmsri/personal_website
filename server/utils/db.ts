import Database from 'better-sqlite3'
import { join } from 'path'
import crypto from 'crypto'

const DB_PATH = join(process.cwd(), '.data', 'database.sqlite')

let db: Database.Database

function getDb(): Database.Database {
    if (!db) {
        db = new Database(DB_PATH)
        db.pragma('journal_mode = WAL')
        db.pragma('foreign_keys = ON')
        initializeDatabase(db)
    }
    return db
}

function initializeDatabase(db: Database.Database) {
    db.exec(`
        CREATE TABLE IF NOT EXISTS settings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            key TEXT NOT NULL UNIQUE,
            value TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            link TEXT,
            image TEXT,
            sort_order INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS experiences (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            company TEXT,
            image TEXT,
            time_period TEXT,
            description TEXT,
            sort_order INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `)

    seedIfEmpty(db)
}

function seedIfEmpty(db: Database.Database) {
    const settingCount = db.prepare('SELECT COUNT(*) as count FROM settings').get() as { count: number }
    if (settingCount.count > 0) return

    const insertSetting = db.prepare('INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)')
    const settingsData: [string, string][] = [
        ['full_name', 'Hossein Mansouri'],
        ['title', 'Full-Stack Software Engineer'],
        ['bio', "I'm a full-stack software engineer with hands-on experience in both frontend and backend development. My strength lies in building modern, scalable web applications using technologies like Angular, NestJS, Node.js and Vue. I enjoy crafting clean code and intuitive user experiences that solve real-world problems."],
        ['avatar', '/hossein_mansouri_2.jpeg'],
        ['email', 'hsnmsri82@gmail.com'],
        ['phone', '+98 (917) 243-3226'],
        ['instagram', 'humansouri'],
        ['telegram', 'humansouri'],
        ['linkedin', 'https://www.linkedin.com/in/hossein-mansouri-11169a230'],
        ['cv_url', '/cv.pdf'],
        ['admin_password', 'dddfc1b54bbd1a49ddeb9fa6e1efc338:396250f1fb205d083ad74c9dd400b1b40afc70949e85bc9fea4922fd3c58b189d8b9a0938dd72a476a62891f2dd978d499a2b3f790d572187e0268acacf15d7a'],
        ['auth_secret', crypto.randomBytes(32).toString('hex')],
    ]
    for (const [key, value] of settingsData) {
        insertSetting.run(key, value)
    }

    const insertProject = db.prepare('INSERT INTO projects (title, description, link, sort_order) VALUES (?, ?, ?, ?)')
    const projectsData = [
        ['E-Commerce Platform', 'A full-featured online store built with Nuxt 3 and NestJS, featuring real-time inventory management, payment integration, and an admin dashboard.', 'https://github.com/humansouri/ecommerce', 0],
        ['Task Management App', 'A collaborative task management tool with real-time updates using WebSockets, drag-and-drop interface, and team workspaces built with Vue and Express.', 'https://github.com/humansouri/taskmanager', 1],
        ['Weather Dashboard', 'An interactive weather dashboard with location-based forecasts, interactive maps, and data visualization using Chart.js and the OpenWeather API.', 'https://github.com/humansouri/weather', 2],
    ]
    for (const [title, description, link, sort_order] of projectsData) {
        insertProject.run(title, description, link, sort_order)
    }

    const insertExperience = db.prepare('INSERT INTO experiences (title, company, time_period, description, sort_order) VALUES (?, ?, ?, ?, ?)')
    const experiencesData = [
        ['Senior Frontend Developer', 'TechCorp Solutions', '2023 - Present', 'Led the frontend team in migrating a legacy Angular application to Vue 3. Improved performance by 40% and implemented a component library used across multiple products.', 0],
        ['Full Stack Developer', 'Digital Innovators', '2021 - 2023', 'Developed and maintained multiple web applications using NestJS and Angular. Built RESTful APIs, implemented authentication systems, and integrated third-party services.', 1],
        ['Junior Web Developer', 'StartUp Hub', '2019 - 2021', 'Started as an intern and grew into a full-time role. Built responsive websites and web applications using HTML, CSS, JavaScript, and React.', 2],
    ]
    for (const [title, company, time_period, description, sort_order] of experiencesData) {
        insertExperience.run(title, company, time_period, description, sort_order)
    }
}

export function useDatabase(): Database.Database {
    return getDb()
}
