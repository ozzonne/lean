import { createClient } from "https://deno.land/x/supabase/mod.ts";

const url = "https://zyrtziizbzfjluvsgjyb.supabase.co";
const public_anon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjcxMjU5OCwiZXhwIjoxOTQyMjg4NTk4fQ.7Ozw8ajqvEJSNCbZJm3Kkl1tYMqqbqYNc5K9wJTa6jA";
export const service_role =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjI2NzEyNTk4LCJleHAiOjE5NDIyODg1OTh9.bhLWOh02KTOXHyz1-Q0jinsS8ozES6BzDJ6Kc0SGV0Q";
export const jwt_secret = "25308aa8-4b0e-4e12-a7e8-d9920b6ebdc9";

const supabase = createClient(url, public_anon);
export default supabase;
