import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Header from '../partials/Header';

function Contact() {

  const location = useLocation().pathname;

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const submitValue = () => {
      const frmdetails = {
          'Name' : Name,
          'Email' : Email,
          'Message' : setMessage
      }
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-32">

              {location === "/contact/sent" ?
                <>
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <img src={require("../images/message-sent.svg")} className="h-48 mx-auto mb-16" alt="Message Sent" />
                    <p className="text-xl text-gray-600">
                      Your message has been sent. <br />
                      I'll get in touch with you shortly.
                    </p>
                  </div>  
                </> : <>
                  {/* Page header */}
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                    <h1 className="h3 mb-4 dark:text-gray-200">Contact</h1>
                    <p className="text-xl text-gray-600">
                      Need anything? let's work together.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="max-w-sm mx-auto">
                    <form action="https://app.99inbound.com/api/e/LGPUtNHV" method="POST">

                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name</label>
                          <input id="name" type="text" name="name" className="form-input w-full text-gray-800" placeholder="Enter your name" onChange={e => setName(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                          <input id="email" type="email" name="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Message</label>
                          <textarea id="message" type="message" name="message" className="form-input w-full text-gray-800" placeholder="Enter you message" onChange={e => setMessage(e.target.value)}/>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="w-full px-3">
                          <button className="btn text-white bg-blue-500 hover:bg-blue-600 w-full">Send</button>
                        </div>
                      </div>

                    </form>
                  </div>
                </>
              }

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Contact;
