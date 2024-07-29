import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {send, sendHover, facebook, instagram} from '../assets'; // Make sure you have these images

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
        .send(
            'serviceID',
            'templateID',
            {
              from_name: form.name,
              to_name: 'YourName',
              from_email: form.email,
              to_email: 'youremail@gmail.com',
              message: form.message,
            },
            'yourpublickey'
        )
        .then(
            () => {
              setLoading(false);
              alert('Thank you. I will get back to you as soon as possible.');

              setForm({
                name: '',
                email: '',
                message: '',
              });
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert('Something went wrong. Please try again.');
            }
        );
  };

  return (
      <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] bg-jet p-8 rounded-2xl">
          <div className="flex-[0.25] bg-jet p-8 rounded-2xl">
            <p className={styles.sectionSubText}>Suivez-moi sur</p>
            <div className="flex flex-col gap-4 mt-4">
              <a
                  href="https://www.facebook.com/BouramaSomano/" // Replace with your Facebook profile link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-timberWolf">
                <img
                    src={facebook}
                    alt="Facebook"
                    className="w-6 h-6"
                />

                <span>Facebook</span>
                <span>Bourama Soumano officiel</span>
              </a>

              <a
                  href="tel:+223 76 60 44 31"
                  className="flex items-center gap-3 text-timberWolf">
                <span>📞</span>
                <span>+223 76 60 44 31</span>
              </a>
            </div>
          </div>

        </motion.div>


      </div>
  );
};

export default SectionWrapper(Contact, 'contact');
