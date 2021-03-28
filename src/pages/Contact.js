import React from 'react';
import Header from '../partials/Header';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-32">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h3 mb-4 dark:text-gray-200">Contact</h1>
                <p className="text-xl text-gray-600">
                  Need anything? let's work together.
                </p>
              </div>

              {/* Contact Form */}
              <iframe title="Contact Form" className="w-full h-screen" src="https://arwildo.com/iframes/contact-form" />

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default Contact;
