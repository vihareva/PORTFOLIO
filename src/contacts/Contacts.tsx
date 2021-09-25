import React from 'react';
import s from './Contacts.module.css'
import cs from '../common/styles/Container.module.css'


export function Contacts() {
    return (
        <div className={s.contactsBlock}>

            <div className={`${cs.container} ${s.contactsContainer}`}>

                <h2 className={s.title}>Contacts</h2>
                {/*<div className={s.formBlock}>*/}
                    <form action="" className={s.form}>
                                <input type="text" value={'Name'} className={s.name} />
                                <input type="text" value={'Email'} className={s.email} />
                            <textarea value={'Message'} ></textarea>

                        {/*<div className={s.button}>*/}
                            <input type='submit'/>
                        {/*</div>*/}
                    </form>
                {/*</div>*/}

            </div>

        </div>
    );
}