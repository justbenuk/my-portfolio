// TypeScript types for your models
// These can be used throughout your application

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  published: boolean;
  featured: boolean;

  // SEO
  metaTitle?: string;
  metaDescription?: string;

  // Media
  image?: string;
  imageAlt?: string;

  // Categorization
  category: string;
  tags: string[];

  // Metadata
  author: string;
  readTime?: string;
  views: number;

  // Timestamps
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  comments?: Comment[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;

  // Status
  published: boolean;
  featured: boolean;

  // Media
  image?: string | null;
  imageAlt?: string | null;
  gallery: string[];

  // Project details
  category: string;
  tags: string[];

  // Links
  liveUrl?: string | null;
  githubUrl?: string | null;
  caseStudyUrl?: string | null;

  // Features and challenges
  features?: unknown;
  technologies?: unknown;
  challenges?: unknown;

  // Metadata
  client?: string | null;
  duration?: string | null;
  completedAt?: Date | null;

  // Stats
  views: number;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface Technology {
  name: string;
  description: string;
}

export interface Challenge {
  title: string;
  solution: string;
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  email: string;
  approved: boolean;

  // Relations
  postId: string;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  type: 'post' | 'project';

  createdAt: Date;
  updatedAt: Date;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: 'post' | 'project';

  createdAt: Date;
  updatedAt: Date;
}

export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export type PostsResponse = PaginatedResponse<Post>;
export type ProjectsResponse = PaginatedResponse<Project>;

// Filter/Query types
export interface PostFilters {
  category?: string;
  tag?: string;
  featured?: boolean;
  published?: boolean;
  search?: string;
}

export interface ProjectFilters {
  category?: string;
  tag?: string;
  featured?: boolean;
  published?: boolean;
  search?: string;
}
