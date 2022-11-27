import React from 'react';
import "./sidebar.css";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DuoIcon from '@mui/icons-material/Duo';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
function Sidebar() {

    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontSize='larg' />}
                className="sidebar__compose"
                onClick={()=>dispatch(openSendMessage())}
                >
                Compose
            </Button>

            <SidebarOption
                icon={InboxIcon}
                title={'Inbox'}
                number={54}
                selected={true}
            />

            <SidebarOption
                icon={StarIcon}
                title={'Starred'}
                number={54}
            />

            <SidebarOption
                icon={AccessTimeIcon}
                title={'Snoozed'}
                number={54}
            />

            <SidebarOption
                icon={LabelImportantIcon}
                title={'Important'}
                number={54}
            />

            <SidebarOption
                icon={SpeakerNotesIcon}
                title={'Sent'}
                number={54}
            />

            <SidebarOption
                icon={StarIcon}
                title={'Drafts'}
                number={54}
            />

            <SidebarOption
                icon={ExpandCircleDownIcon}
                title={'More'}
                number={54}
            />


            <div className="sidebar__footer">
                <div className="footerIcon">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar