import {Featuring} from "./Featuring";
import { projectsData } from "@/utils/projectsData"
export  const Projects =()=> { 
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
           {projectsData.map((project) => (
            <Featuring key={project.id} ProjectData={project} />
          ))}
        </div>
    )
}
export default Projects