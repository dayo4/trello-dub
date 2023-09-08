import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64ee8c6b7322b9785983",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;