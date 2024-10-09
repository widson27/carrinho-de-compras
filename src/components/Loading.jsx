import { BiLoaderAlt } from "react-icons/bi";

function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <BiLoaderAlt className="w-full text-[2rem] my-0 mx-auto mb-0 animate-spin" />
    </section>
  )
}

export default Loading;