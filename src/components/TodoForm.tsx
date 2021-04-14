import React, { useState } from "react";

interface TodoFormProps {
    onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = useState<string>("");

	const changeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

    const keyPressHandler = (event: React.KeyboardEvent) => {
		console.log(event)
        if(event.key === "Enter"){
			if(title.trim() !== ""){
				props.onAdd(title)
				console.log(title)
				setTitle("")
			}else{
				setTitle("")
			}
        }
    }

	return (
		<div className='input-field mt-2'>
			<input
				onChange={changeHander}
				value={title}
				type='text'
				id='title'
				placeholder='input todo'
                onKeyPress={keyPressHandler}
			/>
			<label htmlFor='title' className='active'>
				input todo
			</label>
		</div>
	);
};
