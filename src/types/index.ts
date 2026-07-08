export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  categoryName: string;
  subcategoryName: string;
  shortDescription: string;
  description: string;
  image: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: ProductSubcategory[];
}

export interface ProductSubcategory {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface WhyChooseUs {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}