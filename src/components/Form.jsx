import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const formSubmit = import.meta.env.FORM_SUBMIT;
    const front_URL = import.meta.env.FRONT_URL;
    const service = import.meta.env.EMAILJS_SERVICEID;
    const template = import.meta.env.EMAILJS_TEMPLATEID;
    const pKey = import.meta.env.EMAILJS_PUBLICKEY;
    const todayDate = new Date();

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(service, template, form.current, pKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
            <form ref={form} className="flex flex-col items-center gap-4 mt-6" onSubmit={handleSubmit} action={formSubmit} method="POST">
                <input name="Date" type="hidden" value={todayDate.toLocaleString()} />
                <div className="flex items-center w-[70%] h-16 -ml-3">
                    <img className="w-6 h-6 opacity-60" src="../images/user.png" alt="icon user" />
                    <input name="Full_Name" type="text" placeholder="Nombre completo" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
                </div>
                <div className="flex items-center w-[70%] h-16 -ml-3">
                    <img className="w-6 h-6" src="../images/email.png" alt="icon email" />
                    <input name="Email" type="email" placeholder="Ingrese Email" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
                </div>
                <div className="flex items-center w-[70%] h-16 -ml-3">
                    <img className="w-6 h-6" src="../images/phone.png" alt="icon user" />
                    <input name="Phone" type="text" placeholder="Ingrese celular" className=" w-[85%] ml-3 pl-1 h-10 border-0 border-b border-gray-400 text-sm font-medium outline-none hover:border-secondary-light focus:border-b-2 focus:border-secondary-light" />
                </div>
                <textarea name="Message" className="h-[7.5rem] w-[70%] resize-none border border-gray-400 rounded-lg p-3 mt-3 text-xs font-semibold outline-none focus:border-secondary-light focus:border-2 scrollbar" placeholder="Mensaje"></textarea>
                <button type="submit" className="flex justify-center items-center gap-1 text-[.8rem] font-medium text-white bg-[#7683F9] bg-opacity-100 w-[8rem] h-[2.3rem] rounded-sm transition-all mb-1 hover:bg-secondary-light">Enviar iniciativa</button>

                <input type="hidden" name="_next" value={front_URL} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="Nimion Client Message!" />
                <input type="hidden" name="_cc" value="cristianlotorto@gmail.com,yhanahi16@gmail.com" />
            </form>
    )
}

export default Form;