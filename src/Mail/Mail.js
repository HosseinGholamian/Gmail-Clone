import { ArrowBack, MoveToInbox } from '@mui/icons-material'
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import React from 'react'
import { useNavigate } from "react-router-dom";

import "./mail.css"
import { useSelector } from 'react-redux';
import { selectSelectedMail } from '../features/mailSlice';
function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector((state) => state.mail.selectedMail)
  console.log(selectedMail)
  return (
    <div className='mail'>
      <div className="mail__tool">
        <div className="mail__toolleft">
          <IconButton onClick={() => {
            navigate(-1)
          }}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolright">
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail.subject}</h2>
          <LabelImportantIcon className='lebelImportant' />
          <p>{selectedMail.title}</p>
          <p className='mail__time'>{selectedMail.time}</p>
        </div>

        <div className="mail__message">
          {selectedMail.description}
        </div>
      </div>
    </div>
  )
}

export default Mail