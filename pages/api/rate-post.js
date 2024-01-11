
import { supabase } from "@/services/supabaseClient";

export async function updatePostVotes(req, res) {
  const { postId, type } = req;
  console.log(postId);
  console.log(type);



  /*
    if (!postId || !type) {
      return res.status(400).json({ error: "postId and type are required" });
    }
    */

  // .update({ upvote: supabase.sql("upvote + 1") })
  // .update({ downvote: supabase.sql("downvote + 1") })

  if (type === "upvotes") {
    const { data, error } = await supabase
      .from("feed_dummy")
      .select('upvotes') // wähle alle columns aus
      .eq("id", postId)
      //.update({upvotes: 2})
      
      
      
     
      
      /*.update({ upvote })
      .eq("id", postId);*/

      console.log(data)

  } else if (type === "downvotes") {
     const { data, error } = await supabase
       .from("feed_dummy")
       .select('downvotes') // wähle alle columns aus
       .eq("id", postId);

        console.log(data);
  }

  /*
  if (updatedData.error) {
    res.status(500).json({ error: updatedData.error.message });
  } else {
    res.status(200).json({ message: "Votes updated successfully" });
  }*/

  res = "Votes updated successfully";
  console.log(res);
  //res.status(200).json({ message: "Votes updated successfully" }); => undefined??
}



/*import { supabase } from "@/services/supabaseClient";

const updatePostVotes = async (req, res) => {
  const { postId, type } = req.body; // Annahme, dass postId und type als Parameter übergeben werden


  console.log(req.body);

  let updatedData;

  
  if (type === "upvote") {
    updatedData = await supabase
      .from("feed_dummy")
      .update({ upvotes: supabase.sql("upvotes + 1") })
      .eq("id", postId);
  } else if (type === "downvote") {
    updatedData = await supabase
      .from("feed_dummy")
      .update({ downvotes: supabase.sql("downvotes + 1") })
      .eq("id", postId);
  }

  if (updatedData.error) {
    res.status(500).json({ error: updatedData.error.message });
  } else {
    res.status(200).json({ message: "Votes updated successfully" });
  }
  
};

export default updatePostVotes;
*/