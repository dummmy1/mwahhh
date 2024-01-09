import {motion} from "framer-motion"
import {useEffect, useState} from "react"

const Test = () => {
    const [constraints, setConstraints] = useState({
        top: -200,
        left: -500,
        right: 80,
        bottom: 500,
    });

    useEffect(() => {
        setConstraints({
            top: -window.innerHeight  / 2 + 200,
            left: -window.innerWidth  / 2 + 200,
            right: window.innerWidth  / 2 - 200,
            bottom: window.innerHeight  / 2 - 200,
        });
    }, []);

    return (
    <>
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ 
            position: 'absolute', 
            top: '10%', // move it a little bit up from the center
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            fontSize: '2em', // increase the font size
            fontWeight: 'bold', // make the text bold
            whiteSpace: 'pre-line',
            textAlign: 'center'
        }}
        >
        {'Hey cutie :> This is my page that I did for you!\n\n You can move the heart as it will follow you all this time hehehe '}
        </motion.h1>
        <div className="course" style={{ position: 'fixed', width: '100%', height: '100%', top: '-15%'}}>
            <motion.div 
                drag 
                dragConstraints={constraints}
                initial={{scale:3.1}}
                whileHover={{ scale: 3.1 }}
                whileTap={{ scale: 3.3 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29.6" height={100}>
                    <path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </motion.div>
        </div>
        </>
    )
}

export default Test