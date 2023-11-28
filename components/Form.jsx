import Link from "next/link";
import { useRef } from "react";

const Form = ({
  type,
  submitting,
  handleSubmit,
  tag,
  setTag,
  image,
  setImage,
}) => {
  const formRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file)
  };

  const TransformFile =(file)=>{
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
      reader.onloadend = ()=>{
        setImage(reader.result)
      }
    } else {
      setImage('')
    }
  };

  return (
    <section className="w-full max-w-full flex flex-col items-center px-6">
      <h1 className="bold-32 mt-6 text-left">
        <span className="blue_gradient">{type} Image</span>
      </h1>

      <form
        htmlFor="imageUpload"
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism "
      >
        <label >
          <span className="font-semibold text-base text-gray-700  bold-18 mr-3">
            Upload your image here
          </span>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            required
            className="mt-5"
          />
          <label
            htmlFor="imageUpload"
            className="btn_green rounded-xl bold-16 cursor-pointer hover:bg-green-700"
          >
            Browse
          </label>
          {image && (
            <div className="mt-3">
              <img
                src={image}
                alt="Image Preview"
                className="max-w-full h-auto rounded"
              />
            </div>
          )}
        </label>

        <label>
          <span className="i font-semibold text-base text-gray-700">
            Field of Image Tags{" "}
            <span className="font-normal">
              (#product, #nature, #model, etc.)
            </span>
          </span>
          <input
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 space-x-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-green-50 rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
