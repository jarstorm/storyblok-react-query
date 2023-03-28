
const PostDetailComponent = ({body, id, img, title}) => {        
  return (
    <div className="mt-20 mb-20">
      <span>{body}</span>
      <span>{title}</span>
      <img src={img} />
    </div>
  );
};

export default PostDetailComponent;
