import React from 'react'

export const MyMap = () => {
    return (
        <div><iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.603644108816!2d105.77032909999998!3d21.02664685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455c3ab6d46a7%3A0x974b8adb8575af98!2sHyatt%20Regency%20West%20Hanoi!5e0!3m2!1svi!2s!4v1675841095433!5m2!1svi!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
    )
}
