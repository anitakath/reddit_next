import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://rqroknrdyivtmzueqykq.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);


export const signInWithGoogle = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "google",
  });
  if (error) {
    console.error("Google Sign-In Error", error);
  }
};

export const signInWithGooogle = async() =>{

  try{
    const { user, data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "online",
          prompt: "consent",
        },
      },
    });
    console.log(user, '💜')
    if (data) {
      dispatch(login());
      console.log(isLoggedIn);
    }
    if (error) {
      console.error("google sign in error", error);
    }
  
  } catch(error){
    console.error('google sign in error', error)
  }
}