import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="image"
      strength={-200}
    >
      <div
        className="hero h-[600px]"
      >
        <div className="text-center">
          <div className="w-[900px] flex justify-center items-center flex-col h-[250px] bg-black opacity-60 text-white">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
