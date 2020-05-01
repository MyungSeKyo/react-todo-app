import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/all";
import cn from 'classnames'
import './TodoListItem.scss'

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {checked, text, id} = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkBox', checked)} onClick={()=>onToggle(id)}>
                    { checked?<MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={()=>onRemove(id)}>
                    <MdRemoveCircleOutline/>
                </div>

            </div>
        </div>
    )
};

export default React.memo(TodoListItem);