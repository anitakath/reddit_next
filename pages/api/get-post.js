import { supabase } from "@/services/supabaseClient";

export default async (req, res) =>{
    const {data} =  await supabase
    .from('feed_dummy') // der erstellte table auf supabase.com...
    .select('*') // wähle alle columns aus
    .order('id', {ascending: false}) // this will show us the most recent post first

    res.status(200).json({data: data})
}


