
interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  ssl: boolean;
}

const dbConfig: DatabaseConfig = {
  host: 'pg-184b9750-princevalerie99.g.aivencloud.com',
  port: 27220,
  database: 'defaultdb',
  user: 'avnadmin',
  password: 'AVNS_qXrb1bLTECk5VPy-Dho',
  ssl: true
};

// Note: Untuk implementasi lengkap, Anda perlu menggunakan library seperti pg atau node-postgres
// di backend/server-side. Frontend tidak dapat langsung connect ke PostgreSQL.

export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at?: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_at: Date;
  category: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  description: string;
  images: string[];
  category: string;
  year: number;
  featured: boolean;
}

// Temporary localStorage functions for frontend-only implementation
// In production, these should be API calls to your backend

export const saveContactSubmission = async (data: ContactSubmission): Promise<boolean> => {
  try {
    // In real implementation, this would be an API call to your backend
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    const newSubmission = {
      ...data,
      id: Date.now(),
      created_at: new Date().toISOString()
    };
    submissions.push(newSubmission);
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    console.log('Contact submission saved:', newSubmission);
    return true;
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return false;
  }
};

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    return submissions;
  } catch (error) {
    console.error('Error getting contact submissions:', error);
    return [];
  }
};

export const saveBlogPost = async (data: BlogPost): Promise<boolean> => {
  try {
    const posts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    posts.push(data);
    localStorage.setItem('blog_posts', JSON.stringify(posts));
    return true;
  } catch (error) {
    console.error('Error saving blog post:', error);
    return false;
  }
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const posts = JSON.parse(localStorage.getItem('blog_posts') || '[]');
    return posts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
};

export const savePortfolioItem = async (data: PortfolioItem): Promise<boolean> => {
  try {
    const items = JSON.parse(localStorage.getItem('portfolio_items') || '[]');
    items.push(data);
    localStorage.setItem('portfolio_items', JSON.stringify(items));
    return true;
  } catch (error) {
    console.error('Error saving portfolio item:', error);
    return false;
  }
};

export const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  try {
    const items = JSON.parse(localStorage.getItem('portfolio_items') || '[]');
    return items;
  } catch (error) {
    console.error('Error getting portfolio items:', error);
    return [];
  }
};

// Database connection info (for backend reference)
export const DATABASE_URL = `postgres://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}?sslmode=require`;

console.log('Database configuration loaded:', {
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database,
  user: dbConfig.user
});
