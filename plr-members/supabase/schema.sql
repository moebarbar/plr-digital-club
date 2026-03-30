-- Profiles
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  is_active boolean default false,
  plan text default 'lifetime',
  onboarding_complete boolean default false,
  stripe_customer_id text,
  stripe_payment_id text,
  created_at timestamptz default now()
);

-- Categories
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  icon text,
  display_order int default 0,
  created_at timestamptz default now()
);

-- Products
create table public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  access_url text not null,
  category_id uuid references public.categories(id),
  is_featured boolean default false,
  is_new boolean default true,
  display_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Orders
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  stripe_session_id text,
  amount int,
  status text,
  plan text default 'lifetime',
  created_at timestamptz default now()
);

-- Access log
create table public.access_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  product_id uuid references public.products(id),
  accessed_at timestamptz default now()
);

-- Enable RLS
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.access_log enable row level security;

-- Profiles policies
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Categories policies
create policy "Anyone can view categories" on public.categories for select using (true);

-- Products policies
create policy "Active members can view products" on public.products for select using (
  exists (select 1 from public.profiles where id = auth.uid() and is_active = true)
);

-- Orders policies
create policy "Users can view own orders" on public.orders for select using (auth.uid() = user_id);

-- Access log policies
create policy "Users can insert own logs" on public.access_log for insert with check (auth.uid() = user_id);
create policy "Users can view own logs" on public.access_log for select using (auth.uid() = user_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Indexes
create index on public.products(category_id);
create index on public.products(is_new);
create index on public.products(created_at desc);
create index on public.products(is_featured);
create index on public.access_log(user_id);

-- Seed categories
insert into public.categories (name, slug, display_order) values
  ('Canva Templates', 'canva-templates', 1),
  ('Social Media Templates', 'social-media-templates', 2),
  ('Planners & Journals', 'planners-journals', 3),
  ('eBooks', 'ebooks', 4),
  ('Notion Templates', 'notion-templates', 5),
  ('PowerPoint Templates', 'powerpoint-templates', 6),
  ('Logo Templates', 'logo-templates', 7),
  ('Infographics', 'infographics', 8),
  ('T-Shirt & Mug Designs', 'tshirt-mug-designs', 9),
  ('Excel Templates', 'excel-templates', 10),
  ('AI Art', 'ai-art', 11),
  ('Resume Templates', 'resume-templates', 12),
  ('Coloring Books', 'coloring-books', 13);
