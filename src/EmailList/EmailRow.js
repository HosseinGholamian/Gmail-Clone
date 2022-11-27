import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import "./emailRow.css"
import {

    useNavigate,
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';
function EmailRow(props) {

    const navigate = useNavigate();
    var dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail(
            props
        ))
        navigate('/mail');

    }
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__option">
                <Checkbox />

                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>

            </div>

            <h3 className="emailRow__title">
                {props.title}
            </h3>

            <div className="emailRow__message">
                <h4>{props.subject} {" "}
                    <span className="emailRow__message__description">
                        -  {props.description}
                    </span>
                </h4>
            </div>

            <div className="emailRow__time">
                {props.time}
            </div>
        </div>
    )
}

export default EmailRow