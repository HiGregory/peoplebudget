import React, { useState, useContext } from 'react';
import Comments from '../components/CommentPanel/index';
import Map from '../components/Map/index';
import Marker from '../components/Map/Marker/index';
import Navbar from '../components/Navbar/index';
import { Projects } from '../components/ProjectsList/index';
import { Context } from '../store/store';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

const MapView = () => {
    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "projectId": Math.floor(Math.random()*1000),
                "title": projecTitle,
                "author": author,
                "description": description,
                "avatar": avatarUrl,
                "votes": 0,
                "details": details
            })
        };
        fetch('http://localhost:8000/api/v1/project', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        setViewForm(!viewForm)
    }
    const {
        actions: { getMenus }
    } = useContext(Context);
    const [viewList, setViewList] = useState(true);
    const [viewForm, setViewForm] = useState(false);
    const [projecTitle, setProjectTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [details, setDetails] = useState("");
    return (
        <div className="container-fluid">
            <Navbar options={getMenus()} />
            <div className="row">
                <div className="col-12 mx-auto" style={{ backgroundColor: 'rgba(0,0,0,.1)' }}>
                    <div className="row">
                        <div className="col-6">
                            {viewForm ? (<Form className="form">
                                <FormGroup>
                                    <Label for="name">Project Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Best Project Example"
                                        value={projecTitle}
                                        onChange={(e) => setProjectTitle(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="author">Author</Label>
                                    <Input
                                        type="text"
                                        name="author"
                                        id="author"
                                        placeholder="John Doe"
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="description">Description</Label>
                                    <Input type="textarea" name="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="avatar">Avatar URL</Label>
                                    <Input
                                        type="text"
                                        name="avatar"
                                        id="avatar"
                                        placeholder="https://image.com/john-doe.jpg"
                                        value={avatarUrl}
                                        onChange={(e) => setAvatarUrl(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="details">Details</Label>
                                    <Input type="textarea" name="text" id="details" value={details} onChange={(e) => setDetails(e.target.value)}/>
                                </FormGroup>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Form>) : <span></span>}
                            {viewList ? (
                                <Map>
                                    <Marker
                                        lat={25.77}
                                        lng={-80.22}
                                        title="Fix roadsFix roadsFix roadsFix roadsFix roadsFix roads"
                                    >
                                        <div>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Perspiciatis nesciunt eum cum nemo repellendus, optio
                                            alias architecto voluptas neque, officiis sequi.
                                            Explicabo odit, officia sit error assumenda impedit?
                                            Necessitatibus, ducimus!
                                        </div>
                                    </Marker>
                                </Map>
                            ) : (
                                <Comments />
                            )}
                        </div>
                        <div className="col-6">
                            <Projects setViewList={setViewList} />
                            <button onClick={() => setViewForm(!viewForm)}>test button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapView;
