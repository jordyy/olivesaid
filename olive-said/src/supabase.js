import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdxxtowbbrweqthphrdq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkeHh0b3diYnJ3ZXF0aHBocmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzI3MDIsImV4cCI6MjAxMzQwODcwMn0.AZzXMWUDaqAtkDgIWRFzwDo9Xqrgzct-2OUn3toQb7Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
