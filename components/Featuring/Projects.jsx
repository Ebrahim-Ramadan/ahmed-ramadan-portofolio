import {Featuring} from "./Featuring";
import { projectsData } from "@/utils/projectsData"
import {LazyLoad} from "@/utils/LazyLoad";
export  const Projects =()=> { 
    return (
      <LazyLoad>
      {projectsData.map((project) => (
          <Featuring key={project.id} ProjectData={project} />
        ))}
      </LazyLoad>
       
    )
}
export default Projects