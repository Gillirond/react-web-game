import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar, Form} from "react-bootstrap";

export default function NameForm(props) {
    const {playerLabel, submitLabel, quitPlaying} = props;
    const [nameValue, setNameValue] = useState(props.nameValue);

    useEffect(() => {
        setNameValue(props.nameValue);
    }, [playerLabel])

    const onNameChange = e => {
        setNameValue(e.target.value)
    }

    const onNameSet = e => {
        e.preventDefault();

        props.onNameSet(nameValue);
    }

    const disabled = nameValue.length < 3;

    return (
        <div>
            <Form onSubmit={onNameSet}>
                <Form.Group>
                    <Form.Label>Enter name for {playerLabel}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={nameValue}
                        onChange={onNameChange}
                        isValid={!disabled}
                        isInvalid={disabled}/>
                </Form.Group>

                <ButtonToolbar className="justify-content-between">
                    <Button variant="primary" type="submit" disabled={disabled}>{submitLabel}</Button>
                    <Button variant="outline-secondary" type="cancel" onClick={quitPlaying}>Quit playing</Button>
                </ButtonToolbar>
            </Form>
        </div>
    )
}