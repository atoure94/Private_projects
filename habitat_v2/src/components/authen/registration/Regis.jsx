import Back from "../../common/Back";
import img from '../../images/pricing.jpg';
import {useState} from "react";

const Regis = () =>{
    // State hooks for password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Toggle password visibility
    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <>
            <section className='blog-out mb'>
                <Back name='Login' title='Login' cover={img} />
                <div className='container recent'>

                    <div className="max-w-2xl mx-auto bg-white p-16">
                        <form>
                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                {/* First Name, Last Name, Company, Phone */}
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>

                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    <button type="button" onClick={togglePassword} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l1.5-1.5M21 12l-1.5-1.5M5.5 5.5l1.5 1.5M18 18l-1.5-1.5M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                                <div className="relative">
                                    <input type={showConfirmPassword ? 'text' : 'password'} id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    <button type="button" onClick={toggleConfirmPassword} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l1.5-1.5M21 12l-1.5-1.5M5.5 5.5l1.5 1.5M18 18l-1.5-1.5M12 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I accept the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Regis