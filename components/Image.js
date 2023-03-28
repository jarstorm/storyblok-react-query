import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Image = ({ blok }) => {    
  return (
    <div className="grid" {...storyblokEditable(blok)}>
        <img src={blok.Image}  className={"w-10 h-auto"} />
    </div>
  );
};

export default Image;
