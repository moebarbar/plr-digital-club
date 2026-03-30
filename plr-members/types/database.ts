export interface Profile {
  id: string
  full_name: string | null
  email: string | null
  is_active: boolean
  plan: string
  onboarding_complete: boolean
  stripe_customer_id: string | null
  stripe_payment_id: string | null
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string | null
  display_order: number
  created_at: string
}

export interface Product {
  id: string
  title: string
  description: string | null
  image_url: string | null
  access_url: string
  category_id: string | null
  is_featured: boolean
  is_new: boolean
  display_order: number
  created_at: string
  updated_at: string
  categories?: Category | null
}

export interface Order {
  id: string
  user_id: string
  stripe_session_id: string | null
  amount: number | null
  status: string | null
  plan: string
  created_at: string
}

export interface AccessLog {
  id: string
  user_id: string
  product_id: string
  accessed_at: string
}
