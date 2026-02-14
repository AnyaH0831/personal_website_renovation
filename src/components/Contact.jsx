import { useState} from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        from: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const api_url = import.meta.env.VITE_API_URL;
        console.log('Environment variable VITE_API_URL:', import.meta.env.VITE_API_URL);
        console.log('Using API URL:', api_url);

        try{
            const response = await fetch(`${api_url}/api/send_email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Email sent successfully!');
                setFormData({
                    name: '',
                    from:'',
                    subject: '',
                    message: ''});
            }else{
                setStatus('Failed to send email. Please try again.');
            }
        } catch(error) {
            console.error('Error: ', error);
            setStatus('Error sending email. Please try again.');
        }finally{
            setLoading(false);
        }
    };

    let buttonText = 'Send Email';
    if (loading) {
        buttonText = 'Sending...';
    }

    return (
        <form onSubmit={handleSubmit} className="bg-black py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className='text-4xl md:text-5xl font-bold mb-8 font-mono'>
                    <span className="text-pacific-cyan">
                    Let's Chat!
                    </span>
                </h2>

                <p className="text-xl text-gray-300 mb-8">
                    I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
                </p>

                <div className="mb-4 w-2/3 mx-auto">
                    <label htmlFor="name" className='block text-left text-cherry-rose text-xl font-bold mb-2'>
                    Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Your Name...'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full h-8 p-4 text-gray-300 font-mono rounded-lg bg-gray-900 border-2 border-pacific-cyan hover:border-cherry-rose focus:border-cherry-rose focus:outline-none'
                    />
                </div>

                <div className="mb-4 w-2/3 mx-auto">
                    <label htmlFor="subject" className='block text-left text-cherry-rose text-xl font-bold mb-2'>
                    Subject
                    </label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        placeholder='About...'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='w-full h-8 p-4 text-gray-300 font-mono rounded-lg bg-gray-900 border-2 border-pacific-cyan hover:border-cherry-rose focus:border-cherry-rose focus:outline-none'
                    />
                </div>

                <div className='mb-4 w-2/3 mx-auto'>  
                    <label htmlFor="email" className='block text-left text-cherry-rose text-xl font-bold mb-2'>
                    Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='from'
                        placeholder='..@gmail.com'
                        value={formData.from}
                        onChange={handleChange}
                        required
                        className='w-full h-8 p-4 text-gray-300 font-mono rounded-lg bg-gray-900 border-2 border-pacific-cyan hover:border-cherry-rose focus:border-cherry-rose focus:outline-none'
                    />
                </div>
                
                <div className='mb-4 w-2/3 h-full mx-auto'>  
                    <label htmlFor="message" className='block text-left text-cherry-rose text-xl font-bold mb-2'>
                    Message
                    </label>
                    <textarea
                        type='message'
                        id='message'
                        name='message'
                        rows="5"
                        placeholder='Hello...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='w-full h-full p-4 text-gray-300 font-mono rounded-lg bg-gray-900 border-2 border-pacific-cyan hover:border-cherry-rose focus:border-cherry-rose focus:outline-none'
                    />
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-pacific-cyan text-white rounded-full hover:bg-cherry-rose font-mono"
                >
                    {buttonText}
                </button>
                {status && <p>{status}</p>}

            </div>
        </form>
    )
}
export default Contact;