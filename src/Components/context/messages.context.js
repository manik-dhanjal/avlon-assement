import React,{useState,useContext} from 'react'
import { nanoid } from 'nanoid'

const MessageContext = React.createContext()
const MessageUpdate = React.createContext()

export function useMessage() { return useContext(MessageContext) }
export function useMessageUpdate() { return  useContext(MessageUpdate) }
export const   MessageProvider = ({children}) => {

    const [messages,setMessages] = useState(dummyMessages);
    const sendMessage = (message) => {
        setMessages([...messages,{
            name:"Manik",
            type:"sent",
            id:nanoid(),
            text:message,
            timestamp:new Date()
        }])
    }
    return (
        <MessageContext.Provider value={messages}>
            <MessageUpdate.Provider value={sendMessage}>
                {children}
            </MessageUpdate.Provider>
        </MessageContext.Provider>
    )
}

var dummyMessages=[
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"manik",
        type:"sent",
        text:"this is dummy",
        id:"s1"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy dsv",
        id:"r1"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"manik",
        type:"sent",
        text:"this is dummy ds",
        id:"s2"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy dsv s",
        id:"r2"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"manik",
        type:"sent",
        text:"this is dummy 3",
        id:"s3"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy 4",
        id:"r3"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy 4",
        id:"r4"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy 5",
        id:"r5"
    },
    {
        timestamp:"Thu Nov 12 2020 17:09:17 GMT+0530 (India Standard Time)",
        name:"singh",
        type:"recieved",
        text:"this is dummy 6",
        id:"r6"
    },
]
