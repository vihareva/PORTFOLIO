import React, {useRef} from 'react';
import emailjs, {init} from 'emailjs-com';
import style from './Contacts.module.scss'
import cs from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";
import './Contacts.module.scss'
import {ContactInput} from "./ContactInput";

export function Contacts() {

    const sendEmail = (e:any) => {
        init("user_SP3LKH0PLFGcFhLblY1QY");
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('gmail', 'portfolioContactForm', e.target)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className={style.contactsBlock}>
            <div className={`${cs.container} ${style.contactsContainer}`}>
                <Title smallText={'Any Question?'} text={'Drop Me A Line'}/>
                <div className={style.formContainer}>
                    <form  onSubmit={sendEmail}  className={style.form}>
                        <div className={style.flex}>
                            <div className={style.container}>
                                <ContactInput text={'Name'} name={'name'}/>
                                <ContactInput text={'Subject'} name={'subject'}/>
                            </div>
                            <div className={style.container}>
                                <ContactInput text={'Email'} name={'email'}/>
                                <ContactInput text={'Phone'} name={'phone'}/>
                            </div>
                        </div>
                        <ContactInput text={'Message'} name={'message'}/>
                        {/*<div className={s.button}>*/}
                        <button className={style.submitButton} type='submit'>
                            <span className={style.textLink}>Send Message</span>
                        </button>
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        </div>
    );
}