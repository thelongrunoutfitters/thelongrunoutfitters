import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fvdgoamivqeutwvgsycnl.supabase.co%2F&data=05%7C02%7Ct.coelho%40student.fdu.edu%7Cd4cc7d6af9dc4506974a08dce418f9b1%7C3224fad94bcc4d47ae9886ea3c6b3b13%7C0%7C0%7C638636043133186964%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=71Az2Q3B6H%2B6ckk5%2F0wy4Qs4U8MOjyc%2F%2FFOoee4TRlk%3D&reserved=0
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)