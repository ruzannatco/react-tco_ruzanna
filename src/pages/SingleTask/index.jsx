import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {BACKEND_URL} from "../../const";
import "./styles.css"

export const SingleTask = () => {
    const [singleTask, setSingleTask] = useState(null);

    const params = useParams();
    const taskId = params.taskId;

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${BACKEND_URL}/task/${taskId}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleTask(data);
            })
    }, [taskId])

    if(!singleTask){
        return <div>Loading ... </div>
    }

    return (
      <div className="single-task">
        <button className="single-task--back" onClick={() => {navigate(-1)}}>
            &larr; Back
        </button>
          <div className="single-task--content">
              <h1>{singleTask.title}</h1>
              <img className="single-task--img" src="https://picsum.photos/318/180" alt=""/>
              <p className="single-task--description">{singleTask.description}</p>
              <p>{singleTask.date}</p>
          </div>
      </div>
    );
}