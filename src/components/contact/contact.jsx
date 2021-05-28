import React from 'react';
import {Button} from '../button/button';

const Contact = () => {
    return(
        <section className='contact' id='Contact'>
            <h2>
                Contact
            </h2>
            <p>
                Would you like to work with me or have a question? Don't be shy, let me know! 
            </p>
            <Button classes='btn primary' content="Let's Talk" destination='mailto:test@gmail.com'/>
        </section>
    )
}

export default Contact;