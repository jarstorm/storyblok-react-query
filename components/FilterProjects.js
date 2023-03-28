import { storyblokEditable } from "@storyblok/react";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getProjects } from "../actions/actions";
import FilterProjectsButtons from "./FilterProjectsButtons";
import Project from "./Project";

const FilterProjects = ({blok}) => {                
    const [filter, setFilter] = useState("all");
    const [filteredProjects, setfilteredProjects] = useState([]);    
  
    const { mutate: reloadData } = useMutation(
        () => getProjects(filter),
        {
          onSuccess: (res) => {
            setfilteredProjects(res)            
          },
          onError: (err) => {
            console.log("err", err)
          },
        }
      );

    const updateFilter = (value) => {
        setFilter(value, );        
    }

    useEffect(() => {
        reloadData();
    }, [filter]);

    return (
        <div>
            <span className="block mt-20 mb-20">This data comes from Storyblok. I use a REST query to get the data</span>
            <FilterProjectsButtons setFilter={updateFilter} />        
            <div className="flex flex-row justify-center align-center" {...storyblokEditable(blok)}>            
                {filteredProjects.map(p => <Project key={p.id} {...p} />)}        
            </div>
        </div>
    ); 
};

export default FilterProjects;

  
