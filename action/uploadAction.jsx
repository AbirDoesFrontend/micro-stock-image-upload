"use server";

async function savePhotosToLocal(formData) {
//   console.log(formData);
const files = formData('post')
  const bufferPromise = files.map(post => (
    post.arrayBuffer().then((data) => console.log(data))
  ))
}

export async function uploadFile(formData) {
  try {
    const newFiles = await savePhotosToLocal(formData);
  } catch (error) {
    return { errMsg: error.message };
  }
}
