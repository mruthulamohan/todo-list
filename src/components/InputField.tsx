import React, { useRef } from 'react';
// @ts-ignore: Allow importing CSS without type declarations
import '../App.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.SyntheticEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <form className="input" onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur();
            }}>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Add a new task"
                    className="input__box"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className="input_submit" type="submit">Go</button>
            </form>
        </div>
    );
};

export default InputField;