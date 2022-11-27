import { ArrowDropDown } from '@mui/icons-material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material'
import React from 'react'
import "./emaillist.css"
import PeopleIcon from '@mui/icons-material/People';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';


function EmailList() {
    const [emails, setEmails] = React.useState([]);
    
    React.useEffect(() => {
        const q = query(collection(db, 'emails'), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            setEmails(querySnapshot.docs.map((doc) => {
                return (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )
            }))


        });
    }
        , [])


    return (
        <div className='emailList'>
            <div className="emailList__setting">
                <div className="emailList__left">

                    <Checkbox />

                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>

                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__section">
                <Section color='red' title='Primary' Icon={InboxIcon} selected />
                <Section color='#1A73E8' title='Social' Icon={PeopleIcon} />
                <Section color='green' title='Promotion' Icon={LocalOfferIcon} />
            </div>




            <div className="emailList__list">


                {emails.map(({ id, data }) => {
                    var unixTimestamp = data.timestamp?.seconds
                    var date = new Date(unixTimestamp * 1000);

                    var date = date.getDate() +
                        "/" + (date.getMonth() + 1) +
                        "/" + date.getFullYear() +
                        " " + date.getHours() +
                        ":" + date.getMinutes() +
                        ":" + date.getSeconds();
                    return (
                        <EmailRow
                            key={id}
                            id={id}
                            title={data.to}
                            subject={data.subject}
                            description={data.message}
                            time={date}
                        />
                    )
                })}
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />

                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
                 <EmailRow
                    title="Youtube"
                    subject="Dont forget Like"
                    description="this is a test"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList