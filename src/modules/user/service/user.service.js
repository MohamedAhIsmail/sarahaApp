export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};