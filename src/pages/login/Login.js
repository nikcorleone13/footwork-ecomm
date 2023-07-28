import React, { useEffect, useRef, useState } from 'react'
import { GiFootprint } from "react-icons/gi";
import Typed from "typed.js";



const Login = () => {
    const [signup, setSingup] = useState(false);
    const [reset, setReset] = useState(false);
    const [testEmail, setTestEmail] = useState('');
    const [testPassword, setTestPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const el = useRef(null);

    // functions to handle creds

    const handleTestCreds = () => {
        setTestEmail('wanyekest@gmail.com');
        setTestPassword('wanyekest');
    }

    const handleSignup = () => {
        if (email.toLowerCase().includes('@') && email.toLowerCase().includes('.com')) {
            console.log(firstName, surname, email, password);
        }
        else {
            alert("Wrong Email Id");
            console.log("Invalid email");
        }
    }

    useEffect(() => {
        if (el.current) {
            const typed = new Typed(el.current, {
                strings: ['Designed for You, Step by Step', 'Go Anywhere with Our Stylish Soles.', 'Feet First, Fashion Always.', "Where Fashion Meets Comfort",
                    "Step into Style, Step into Comfort",
                    "Walk the Extra Mile in Style",
                    "Elevate Your Footwear Experience",
                    "Discover Your Perfect Fit",
                    "Stride with Confidence, Every Step of the Way",
                    "Feet First, Fashion Always",
                    "Unleash Your Style Potential with Us",
                    "Innovative Shoes for Inspired Living",
                    "Where Comfort and Chic Collide",
                    "Step Up Your Style Game",
                    "Quality Footwear, Crafted for You",
                    "Fashion-forward Footwear, Effortless Comfort",
                    "Empowering Your Every Step",
                    "The Art of Shoe Craftsmanship",
                    "Footwear Redefined: Your Signature Style",
                    "Walk in Style, Feel the Difference",
                    "Chase Dreams, Not Comfort",
                    "Your Feet's Best Friend",
                    "Step into the Future of Footwear"],
                typeSpeed: 65,
                backSpeed: 50,
                cursorChar: '',
                shuffle: true,
                smartBackspace: false,
                loop: true
            });
            return () => {
                typed.destroy(); // Cleanup the Typed instance when the component unmounts
            };

        }


    }, []);

    return (
        <div className='h-screen '>
            {/* <Navbar /> */}
            <div className='h-[100%] w-[100%] bg-lightText flex flex-col md:flex-row md:justify-center md:items-center py-4'>

                {/* image div */}
                <div className='  w-[100%] md:w-[40%] h-[20%] md:h-[50%] text-4xl md:text-6xl  flex flex-col justify-center items-center '>
                    <p className="flex justify-center items-center tracking-wider font-semibold  uppercase">
                        Footwork
                        <span className="px-2" style={{
                            transform: 'scaleX(-1)'
                        }}>
                            <GiFootprint className='-rotate-45' />
                        </span>

                    </p>
                    <p className='hidden md:inline-block  absolute top-[30%] left-[38%] -rotate-45  '><GiFootprint /></p>
                    <p className='hidden md:inline-block  absolute top-[20%] left-[41%] -rotate-45  ' style={{ transform: 'scaleX(-1)' }}><GiFootprint className='-rotate-45' /></p>

                    <div className='h-[10%] w-[100%] mt-4 md:mt-3 flex items-center justify-center '>
                        <p ref={el} className='text-xl capitalize'></p>
                    </div>
                </div>

                {/* form div */}

                {
                    !signup ? ((
                        <div className='bg-lightText w-[100%] md:w-[40%] h-[50%] md:h-[60%] mt-8 md:mt-0 flex flex-col justify-center gap-3 rounded-tr-[15%]'>
                            <p className='text-2xl font-semibold uppercase'>Sign In</p>
                            <div className='flex flex-col items-center text-lg'>

                                <div className='w-[80%] md:w[60%] flex flex-col items-center justify-evenly my-3'>
                                    <input onChange={(e) => setTestEmail(e.target.value)} className='w-[100%] md:w[60%] m-2 p-2 rounded-lg focus:outline-bgPrimary bg-white text-bgPrimary ' type='text' placeholder='Username' value={testEmail} />

                                    <input className='w-[100%] md:w[60%] m-2 p-2 rounded-lg focus:outline-bgPrimary bg-white text-bgPrimary ' type='password' placeholder='Password' value={testPassword} onChange={(e) => setTestPassword(e.target.value)} />
                                </div>

                                <div className='bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer ' onClick={() => handleSignup()}>Login</div>
                                {
                                    !reset ?
                                        (<div className='bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer ' onClick={() => { handleTestCreds(); setReset(!reset); }} >Login as Guest</div>)
                                        :
                                        (<div className='bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer ' onClick={() => { setTestEmail(''); setTestPassword(''); setReset(!reset) }} >Reset Credentials</div>)
                                }
                            </div>
                            <p onClick={() => setSingup(!signup)} className='cursor-pointer underline underline-offset-2 font-semibold '>Sign Up with us</p>
                        </div>
                    ))
                        :
                        // signup div
                        ((
                            <div className='bg-lightText w-[100%] md:w-[40%] h-[60%] md:h-[70%] mt-8 md:mt-0 flex flex-col justify-center gap-6 rounded-tl-[15%]'>
                                {/* login div */}
                                <p className='text-2xl font-semibold uppercase'>Sign Up</p>

                                <div className=' flex flex-col items-center text-lg '>

                                    {/* username */}
                                    <div className=' w-[80%] md:w[60%] flex flex-col items-center justify-evenly my-3'>
                                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white ' type='text' placeholder='First Name' />
                                        <input value={surname} onChange={(e) => setSurname(e.target.value)} className='w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white ' type='text' placeholder='Last Name' />
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white ' type='email' placeholder='Email Id' />
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white ' type='password' placeholder='Password' />
                                    </div>
                                    <div className='bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer ' onClick={() => handleSignup()}>Sign Up</div>
                                </div>


                                <p onClick={() => setSingup(!signup)} className='cursor-pointer underline underline-offset-2  font-semibold '>Return to Login </p>
                            </div>
                        ))
                }



            </div>
        </div >
    )
}

export default Login