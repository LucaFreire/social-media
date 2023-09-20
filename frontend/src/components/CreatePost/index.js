import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function CreatePost() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isCreated, setIsCreated] = useState(true);

    const handleCreatePost = useCallback(async () => {
        if (!title || !content) {
            setIsEmptyInput(true);
            return;
        }

        const postData = {
            title: title,
            content: content
        };

        const jwt = sessionStorage.getItem('token');
        console.log('sd');
        console.log(jwt);

        try {
            const res = await axios.post(process.env.REACT_APP_BACK_SERVER + "post/create", { jwt, postData });
            console.log(`post: ${res}`);
            handleClose();
        } catch (error) {
            console.log(error);
            setIsCreated(false);
        }
    });

    return (
        <>
            <Button variant="outline-" onClick={handleShow}>
                Create Post
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Title"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Post Content"
                            />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleCreatePost()}>
                        Save Changes
                    </Button>
                    {isCreated ? "" : "Post not created"}
                    <br />
                    {isEmptyInput ? "Empty input" : ""}
                </Modal.Footer>
            </Modal>
        </>)
}
export default CreatePost;