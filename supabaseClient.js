// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wcicsdoxmlhksvodpmys.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY5MjI4MSwiZXhwIjoxOTUwMjY4MjgxfQ.5yrpMKQuWg19vuzAP31AUZK4lAy0ikrh6z64uyq47NM"

export const supabase = createClient(supabaseUrl, supabaseKey)


