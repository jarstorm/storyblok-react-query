const Project = ({name, content}) => {              
  return (
        <div className="border-2 rounded-xl border-black p-10 m-6">
            <span className="text-xl text-blue-800 font-bold mb-3 block">{name}</span>
            <img src={content.image.filename} className="w-40 h-auto mb-10" />
            <span>{content.description}</span>
        </div>
  );
};


export default Project;
