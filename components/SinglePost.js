const SinglePost = ({blok}) => {        
    const {description, image, name} = blok;
  return (
        <div>            
            <p>{name}</p>
            <img src={image.filename} />
            <p>{description}</p>
        </div>
  );
};


export default SinglePost;
