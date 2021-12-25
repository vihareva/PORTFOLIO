import React, {ChangeEvent, useState} from 'react';
import s from './ContactInput.module.scss'
type StatusType='idle'|'succeeded'|'failed'

export function ContactInput(props: any) {
    const [text, setText] = useState('')
    const [editMode, setEditMode] = useState<StatusType>('idle')
    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        if (text) {
            setEditMode('succeeded')
        } else{
            setEditMode('failed')
        }
    }
    const inputFullClassName = s.input + ' ' +
        (editMode==='succeeded' ? s.editedInput : editMode==='failed'? s.error: '');

    return (
        <div className={s.divContainer}>
            <div className={s.inputContainer}>
                <input value={text} type="text" onBlur={onBlurHandler}
                       className={inputFullClassName} onChange={getValue} name={props.name}/>
                <label className={s.label} htmlFor="">{props.text}</label>
            </div>
        </div>
    );
}