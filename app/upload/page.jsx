"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import "@uploadthing/react/styles.css";

import { UploadButton } from "../../utils/uploadthing";

const UploadPage = () => {
  const router = useRouter();
  // const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  const imgList = (
    <>
      {title}
      <ul>
        {images.map((image) => (
          <li key={image.url} className="mt-2">
            <Link href={image.url} target="_blank">
              {image.url}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <section className="w-full max-w-full flex flex-col items-center px-6">
      <h1 className="bold-32 mt-6 text-left">
        <span className="blue_gradient">Upload Image</span>
      </h1>

      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism ">
        <label>
          <span className="font-semibold text-base text-gray-700  bold-18 ">
            Upload your image here
          </span>{" "}
          <br />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response

              setImages(res);

              console.log("Files: ", res);
              alert("Upload Completed");
            }}
          />
        </label>
        {imgList}
        <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Title{" "}
          </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            required
            className="form_input"
          />
        </label>
        {/* <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Tags{" "}
            <span className="font-normal">
              (#product, #nature, #model, etc.)
            </span>
          </span>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label> */}

        <div className="flex-end mx-3 mb-5 space-x-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-green-50 rounded-full text-white"
          >
            {submitting ? "Uploading" : "Upload"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadPage;
