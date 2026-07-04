-- Favorites: members can save products to a personal list.
--
-- Run this once in the Supabase SQL editor (or via supabase db push).
-- The app degrades gracefully until this table exists: hearts and the
-- Favorites filter simply don't render.
--
-- RLS is enabled from day one — each user can only see and modify their
-- own rows, even though the app talks to this table with the anon key.

create table if not exists public.favorites (
  user_id uuid references auth.users on delete cascade not null,
  product_id uuid references public.products(id) on delete cascade not null,
  created_at timestamptz default now(),
  primary key (user_id, product_id)
);

alter table public.favorites enable row level security;

create policy "Users can view own favorites"
  on public.favorites for select
  using (auth.uid() = user_id);

create policy "Users can add own favorites"
  on public.favorites for insert
  with check (auth.uid() = user_id);

create policy "Users can remove own favorites"
  on public.favorites for delete
  using (auth.uid() = user_id);
