import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cixlzzyzwmpmwqmeohyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeGx6enl6d21wbXdxbWVvaHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzMzY2MTMsImV4cCI6MjA0MTkxMjYxM30.NJ7Jw7hdKsJb9H3cFCrV64UjvebaFbJWY2tuDZAh6fw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
