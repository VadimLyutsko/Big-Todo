import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';

type AddItemFormPropsType = {
    addItem: (newTitle: string) => void
}

const AddItemForm: FC<AddItemFormPropsType> = (props) => {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const addItem = () => {
        const newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            addItem();
        }
    }
    return (
        <div>
            <TextField
                variant={"outlined"}
                size={"small"}
                label={"Touch me :)"}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                helperText={error}
            />


            {/*<input value={title}*/}
            {/*       onChange={onChangeHandler}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       className={error ? "error" : ""}*/}
            {/*/>*/}
            <Button>

                <SaveAltIcon
                    fontSize={"large"}
                    onClick={addItem}
                />
            </Button>


        </div>
    );
};

export default AddItemForm;