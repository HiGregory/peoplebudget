import React, { useContext, useState, useEffect } from 'react';
import Button from '../Button/index';
import { Context } from '../../store/store';
import { hideScrollBar } from './index.module.css';

export const ProjectsList = (props) => {
    const [projects, setProjects] = useState([]);
    useEffect(async () => {
        console.log('fetching projects')
        const data = await handleFetchProject()
        setProjects(data)
    }, []);
    const handleFetchProject = async () => {

        const data = {
            "$limit" : 10,
            "$$app_token" : "5jyy0hlqy8thjp8jsbjc6iay9"
        }
        const response = await fetch('https://data.miamigov.com/resource/27a5-g8c5.json', {
            data: JSON.stringify(data)
        })
        return response.json();
    }
    const selectProject = (id) => {
        props.setProjectId(id);
        props.setViewList((viewList) => !viewList);
    };
    return (
        <div className={`row`}>
            <div
                className={`${hideScrollBar} pl-4 pr-4`}
                style={{
                    overflowY: 'auto',
                    height: '95vh',
                    boxShadow: 'inset 0 5px 5px -5px #000000'
                }}
            >
                {projects.slice(0, 10).map((project) => {
                    return (
                        <div
                            key={project.object_number}
                            className="row border mt-2 mb-3 rounded shadow"
                            style={{ backgroundColor: 'rgba(255,255,255,1)' }}
                            onClick={() => selectProject(project.object_number)}
                        >
                            <div className="col-12 text-center">
                                {' '}
                                <h2>{project.organization_description}</h2>{' '}
                            </div>

                            <div
                                className="col-12"
                                style={{ fontSize: '1.75rem', fontStyle: 'italic' }}
                            >
                                ${project.total}
                            </div>
                            <div
                                className="col-12"
                                style={{ fontSize: '1.75rem', fontStyle: 'italic' }}
                            >
                                Author: {project.department_function_description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const ProjectDetails = (props) => {
    const { title, author, details, description } = props.getProject();
    return (
        <div className={`row`}>
            <div
                className={`${hideScrollBar} pl-4 pr-4`}
                style={{
                    overflowY: 'auto',
                    height: '95vh',
                    boxShadow: 'inset 0 5px 5px -5px #000000',
                    backgroundColor: 'rgba(255,255,255,1)'
                }}
            >
                <div className="row pt-4">
                    <div className="col-auto">
                        <Button
                            color="red"
                            radius=".25em"
                            centerPadding=".25em"
                            sidePadding=".25em"
                            onClick={() => {
                                props.setProjectId(null);
                                props.setViewList((viewList) => !viewList);
                            }}
                        >
                            Back
                        </Button>
                    </div>
                    <div className="col-8 text-center">
                        <h2>{title}</h2>
                    </div>
                    <div className="col-12" style={{ fontSize: '1.75rem', fontStyle: 'italic' }}>
                        {description}
                    </div>
                    <div className="col-12" style={{ fontSize: '1.75rem', fontStyle: 'italic' }}>
                        Author: {author}
                    </div>
                    <div className="col-12" style={{ fontSize: '1.5rem' }}>
                        {details}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Projects = (props) => {
    const {
        actions: { getProjects, getProject, changeProjectId }
    } = useContext(Context);
    const [projectId, setProjectId] = useState(null);

    changeProjectId(projectId);
    // console.log(projectId, getProject(), getProjects());

    return (
        <>
            {!getProject() ? (
                <ProjectsList getProjects={getProjects} setProjectId={setProjectId} {...props} />
            ) : (
                <ProjectDetails getProject={getProject} setProjectId={setProjectId} {...props} />
            )}
        </>
    );
};
