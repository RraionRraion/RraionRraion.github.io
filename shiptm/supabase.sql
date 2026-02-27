create table if not exists public.ship_meeting_store (
  id text primary key,
  meetings jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.ship_meeting_store enable row level security;

grant usage on schema public to anon;
grant select, insert, update on table public.ship_meeting_store to anon;

drop policy if exists "anon_select_meeting_store" on public.ship_meeting_store;
create policy "anon_select_meeting_store"
on public.ship_meeting_store
for select
to anon
using (id = 'main');

drop policy if exists "anon_upsert_meeting_store" on public.ship_meeting_store;
create policy "anon_upsert_meeting_store"
on public.ship_meeting_store
for all
to anon
using (id = 'main')
with check (id = 'main');
