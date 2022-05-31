import {Project} from "../../components/Project";
import {MainTaskContextProvider} from "../../context/providers/task-context-provider";

export const ProjectPage = () => {
    return (
        <MainTaskContextProvider>
            <Project />
        </MainTaskContextProvider>
        )
}