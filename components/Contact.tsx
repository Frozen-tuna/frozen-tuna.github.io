export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-highlight font-mono mb-4">05. What's Next?</p>
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-text-secondary max-w-xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, 
          please feel free to reach out!
        </p>
        <a href="mailto:sergarrick@gmail.com" className="inline-block px-8 py-4 bg-highlight hover:bg-highlight/80 rounded-lg font-medium transition-colors">
          Say Hello
        </a>
      </div>
    </section>
  );
}