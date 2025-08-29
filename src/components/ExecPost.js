import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function ExecP() {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    try {
      // 1. Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) throw new Error("User not logged in");

      // 2. Upload file to Supabase Storage
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("media")
        .upload(filePath, file);
      if (uploadError) throw uploadError;

      // 3. Get public URL
      const { data } = supabase.storage.from("media").getPublicUrl(filePath);
      const mediaUrl = data.publicUrl;

      // 4. Determine media type
      const mediaType = file.type.startsWith("image")
        ? "image"
        : file.type.startsWith("video")
        ? "video"
        : "audio";

      // 5. Insert into posts table
      const { error: insertError } = await supabase.from("posts").insert([
        {
          profile_id: user.id, // ✅ set to logged-in user ID
          caption,
          media_url: mediaUrl,
          media_type: mediaType,
        },
      ]);

      if (insertError) throw insertError;

      alert("Post created successfully!");
      setCaption("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Error creating post: " + err.message);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Write your caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
