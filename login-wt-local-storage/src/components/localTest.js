import { useState } from "react";
export default function LocalStore() {
    const [message, setMessage] = useState({
        id: 1,
        message: 'demo message'
    });
    const [isShow, setIsShow] = useState(null);
    const saveMessage = (message) => {
        localStorage.setItem('message', [...message, ]);
    };
    const showMessage = () => {
        setIsShow(!isShow);
    }
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    const renderMessage = () => {
        let showMessage = localStorage.getItem('message');
        return (
            <div>
                <p>
                    {showMessage}
                </p>
            </div>
        )
    }
    // return (
    //     <div>
    //         <div>


    //             <button
    //                 onClick={() => saveMessage(message)}
    //             >
    //                 Save
    //             </button>
    //             <button
    //                 onClick={() => showMessage()}
    //             >
    //                 Show
    //             </button>
    //         </div>
    //         <div>
    //             <input
    //                 value={message}
    //                 onChange={handleChange}
    //             />
    //         </div>
    //         {isShow ? renderMessage() : ' '}
    //     </div>
    // )
    return (
        <div>
            <button
                onClick={() => saveMessage(message)}
            >Save</button>
        </div>
    )
}