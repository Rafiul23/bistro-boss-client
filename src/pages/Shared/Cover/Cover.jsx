const Cover = ({ img, title, subTitle }) => {
    
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url("${img}")`, 
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center">
        <div className="w-[900px] flex justify-center items-center flex-col h-[250px] bg-black opacity-50 text-white">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 uppercase">
           {subTitle}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Cover;
